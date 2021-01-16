const client = require('./client');
const server = require('./server');
const nodemon = require('nodemon');
const pm2 =require('pm2');
const concurrently = require('concurrently');
const spawn = require('spawn-command');

concurrently.call(client(args.('npm start')));

