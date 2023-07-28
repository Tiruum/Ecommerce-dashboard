const express = require('express')

const usersRoutes = require('./routes/users_routes.js')
const productsRoutes = require('./routes/products_routes.js')
const ordersRoutes = require('./routes/orders_routes.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Root endpoint
app.get('/', function (req, res) {
    res.send('You\'re on api side of this site');
})

// Products endpoint
app.use('/', productsRoutes)

// Orders endpoint
app.use('/', ordersRoutes)

// Users endpoint
app.use('/', usersRoutes)


export default {
    path: '/api',
    handler: app
}