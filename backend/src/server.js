const express = require('express');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT;

server.set("port",port)

server.use(morgan('dev'));
server .get("/", (request,response) => {
    response.send("HOLA");
})


module.exports = server 