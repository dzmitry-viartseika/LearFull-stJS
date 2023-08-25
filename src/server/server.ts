import express from 'express'

const server = express();

server.use(express.static('dist'));

server.use("/", (req, res) => {
    res.send('Hello express')
})

server.listen(8080, "localhost", () => {
    console.log('Express server is listening at hhtp://0.0.0.0:8080')
});