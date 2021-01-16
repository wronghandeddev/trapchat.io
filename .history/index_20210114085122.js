const client = require('./client');
const server = require('./server');
const nodemon = require('nodemon');
const pm2 =require('pm2');
const concurrently = require('concurrently');


app.concurrently('npm start client && npm start server');

