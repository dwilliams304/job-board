require('dotenv').config();
const helmet = require('helmet');
const express = require('express');

const server = express();

server.use(helmet());
server.use(express.json());

server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
});

module.exports = server;