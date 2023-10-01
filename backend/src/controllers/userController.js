const bcrypt = require("bcryptjs");
const user = require("../models/userModels");
const getToken = require("../tools/gets");

const usersController = {
  createUser: async (request, response) => {
    try {
      const { name, email, Password } = request.body;
      const hashPassword = await bcrypt.hash("password ", 10);
      const newUser = new user({
        name,
        email,
        password: hashPassword,
      });
      const userCreate = await newUser.save();
    //   response.json({messge:`success! user created with id ${userCreate._id}`})
      const token = await getToken({id:userCreate._id, name:userCreate.name });
      response.json(token);
      
    } catch (error) {
        response.json({messge:'FALLO CREAR USUARIO ID'})
    }
  },
  readAllusers: (request, response) => {
    response.json({ messge: "createall..." });
  },
  readUser: (request, response) => {
    response.json({ messge: "createreaduser..." });
  },
  updateUser: (request, response) => {
    response.json({ messge: "create update..." });
  },
  deleteUser: (request, response) => {
    response.json({ messge: "create delete..." });
  },
};
module.exports = usersController;
