const {Router} = require("express")
const usersController = require("../controllers/userController")

const router = Router()

/*CRUD: create, read, update, delete*/

/** para crear un usuario se usa post */ 
router.post('/',usersController.createUser);
/** para leer un usuario se usa el get */
router.get('/:id',usersController.readUser);
/**para leer varios usuarios */
router.get('/',usersController.readAllusers);
/**para actualizar un usuario se usa put */
router.put('/:id',usersController.updateUser);
/**para eliminar un usuario se usa delete */
router.delete('/:id',usersController.deleteUser);

module.exports = router

/** localhost:4000/user */