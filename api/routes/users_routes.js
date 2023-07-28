const express = require('express')
const router = express.Router()
const UsersController = require('../controller/users_controller')

router.post('/users', UsersController.createUser)
router.get('/users', UsersController.getUsers)
router.get('/users/:id', UsersController.getUser)
router.put('/users/:id', UsersController.updateUser)
router.delete('/users/:id', UsersController.deleteUser)

module.exports = router