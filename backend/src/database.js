const mongose =require("mongoose")

mongose.connect(process.env.MONG_DB)
.then((db) => console.log("Estamos conectados melos"))
.catch((err)=>console.log("lo siento pero la conexion no esta mela"))