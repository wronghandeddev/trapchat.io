const client = require('./client');
const server = require('./server');
const nodemon = require('nodemon');
const pm2 =require('pm2');
const concurrently = require('concurrently');


app.use(concurrently('npm start client && npm start server'));

app.use(proxy({ port : 5095 } =>  ()));
