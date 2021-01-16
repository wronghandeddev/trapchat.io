
const expressSession = require("express-session");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");
const expressVisitorCounter = require("express-visitor-counter");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(helmet());
app.use(cors());
app.use(router);
if(process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has
joined!`,
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});
const counters = {};

(async () => {
	const app = express();
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "./client/build/index.html"));
	});
	app.enable('trust proxy');
	app.use(expressSession({ secret: 'secret', resave: false, saveUninitialized: true }));
	app.use(expressVisitorCounter({ hook: counterId => counters[counterId] = (counters[counterId] || 0) + 1 }));
	app.get('/', (req, res, next) => res.json(counters));
	app.listen(PORT, function () {
		console.log(`🌎 ==> API server now on port ${PORT}!`);
	});

	server.listen(process.env.PORT || 5000, () =>
		console.log(`Server has started.`)
	);

}
