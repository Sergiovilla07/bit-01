const bcrypt = require("bcryptjs");
const user = require("../models/userModels");
const getToken = require("../tools/gets");
const userModels = require("../models/userModels");

const usersController = {
  createUser: async (request, response) => {
    try {
      const { capitan, entrenador, year, ciudad, estadio, presidente, equipo, email, Password } = request.body;
      const hashPassword = await bcrypt.hash("password ", 10);
      const newUser = new user({
        equipo,
        estadio,
        entrenador,
        capitan,
        ciudad,
        year,
        presidente,
        email,
        password: hashPassword,
      });
      const userCreate = await newUser.save();
    //   response.json({messge:`success! user created with id ${userCreate._id}`})
      const token = await getToken({id:userCreate._id, equipo:userCreate.name });
      response.json(token);
      
    } catch (error) {
        response.json({messge:'FALLO CREAR USUARIO ID'})
    }
  },
  readAllusers: async (request, response) => {
    try {
        const allUsers = await userModels.find()
        response.json({allUsers})
    } catch (error) {
        response.json({messge:'FALLO CREAR TODOS LOS USUARIOS'})
    }
  },
  readUser: async (request, response) => {
    try {
        const user = await userModels.findById(request.params.id);
        if (user) {
            response.json({user});
        } else {
            throw new Error("No se encontro el usuario")
        }
    } catch (error) {
        response.json({messge: error.messge || 'FALLO CREAR UN USUARIO' })
    }
  },
  updateUser: async (request, response) => {
    try {
        const userUpdated = await userModels.findByIdAndUpdate(request.params.id, request.body)
        if (userUpdated) {
            response.json({userUpdated: userUpdated._id});
        } else {
            throw new Error("No se encontro el usuario")
        }
    } catch (error) {
        response.json({messge: error.messge || 'FALLO ACTUALIZAR UN USUARIO' })
    }
  },
  deleteUser: async (request, response) => {
    try {
        const userDeleted = await userModels.findByIdAndDelete(request.params.id)
        if (userDeleted) {
            // response.json({userDeleted});
            response.json({userDeleted: userDeleted._id});
        } else {
            throw new Error("No se encontro el usuario")
        }
    } catch (error) {
        response.json({messge: error.messge || 'FALLO EN ELIMINAR UN USUARIO' })
    }
  },
};
module.exports = usersController;
