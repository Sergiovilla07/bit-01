const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    equipo:{type: String, require:true},
    estadio:{type: String, require:true},
    ciudad:{type: String, require:true},
    year:{type: String, require:true},
    presidente:{type:String, require:true},
    capitan:{type:String, require:true},
    entrenador:{type:String, require:true},
    email:{type: String, require:true},
    password:{type: String, require:true}
},{timestamps:true});

module.exports = model("User",userSchema);