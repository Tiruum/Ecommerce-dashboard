const express = require('express')
const router = express.Router()
const OrdersController = require('../controller/orders_controller')

router.post('/orders', OrdersController.createOrder)
router.get('/orders', OrdersController.getOrders)
router.get('/orders/:id', OrdersController.getOrder)
router.put('/orders/:id', OrdersController.updateOrder)
router.delete('/orders/:id', OrdersController.deleteOrder)

module.exports = router