const usersController = {
    createUser: (request, response) => {
        response.json({messge: "createuser..."});
    },
    readAllusers: (request, response) => {
        response.json({messge: "createall..."});
    },
    readUser: (request, response) => {
        response.json({messge: "createreaduser..."});
    },
    updateUser: (request, response) => {
        response.json({messge: "create update..."});
    },
    deleteUser: (request, response) => {
        response.json({messge: "create delete..."});
    },
}
module.exports = usersController;