require('dotenv').config();
const helmet = require('helmet');
const express = require('express');

const PORT = process.env.PORT || 9000;

const server = express();

server.use(helmet());
server.use(express.json());

server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
});

server.listen(PORT, () => {
    console.log(`\n ### SERVER RUNNING ON PORT ${PORT} ### \n`)
});