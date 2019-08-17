const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());
server.use('/', ProjectRouter);

module.exports = server;