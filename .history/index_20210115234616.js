






















const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const server = http.createServer(app);
const io = socketio(server);
app.use(helmet());
app.use(cors());
app.use(router);

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

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);

//
//
//
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

//Send every request to the React app
//Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
//
const PORT = process.env.PORT || 3001;
const INDEX = "/index.html";

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const { Server } = require("ws");

const wss = new Server({ server });
