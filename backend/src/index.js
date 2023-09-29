//Entry points, punto de entrada de mi api
require("dotenv").config()
require ('./database'); 
const server = require("./server");

const port = server.get("port")


server.listen(port, () =>{
    console.log("server running on port" ,port)
})