require('dotenv').config();
import express from 'express';
import helmet from 'helmet';

const PORT = process.env.PORT || 9000;

const server = express();

server.use(helmet());
server.use(express.json());

server.use((err: any, req: any, res: any) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

server.listen(PORT, () => {
    console.log(`\n ### SERVER RUNNING ON PORT ${PORT} ### \n`)
});