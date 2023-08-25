import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import {PORT, HOST, MONGODB_URI} from "./config";
const app = express();
const server = http.createServer(app);
//
// server.use(express.static('dist'));
//
// server.use("/", (req, res) => {
//     res.send('Hello express')
// })
//
// server.listen(PORT, HOST, () => {
//     console.log(`Express server is listening at ${SERVER_URL}`)
// });

const startApp = async () => {
    console.log('wertey', MONGODB_URI)
    try {
        await mongoose.connect(MONGODB_URI)
        server.listen(PORT, () => {
            console.log(`Backend is running on the ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();