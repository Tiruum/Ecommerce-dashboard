const express = require('express')
const router = express.Router()
const ProductsController = require('../controller/products_controller')

router.post('/products', ProductsController.createProduct)
router.get('/products', ProductsController.getProducts)
router.get('/products/:id', ProductsController.getProduct)
router.put('/products/:id', ProductsController.updateProduct)
router.delete('/products/:id', ProductsController.deleteProduct)

module.exports = router