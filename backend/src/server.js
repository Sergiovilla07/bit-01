const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routers/usersRouter')

const server = express();
const port = process.env.PORT;

server.set("port",port)


//miderwords
server.use(morgan('dev'));
server.use(express.json());


server.get("/", (request,response) => {
    response.json({message: "HOLA"});
})

//user
server.use("/user/",usersRouter);



module.exports = server 