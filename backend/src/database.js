const mongose =require("mongoose")

mongose.connect(process.env.MONG_DB)
.then((db) => console.log("Bin, conectado a la base de datos"))
.catch((err)=>console.log("Error, no se conceto a la base de datos"))