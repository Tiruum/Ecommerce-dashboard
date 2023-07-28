const db = require('../db')

class OrdersController {
    // customerName
    // email
    // phone
    // selectedProducts
    // status
    // comment
    async createOrder(req, res) {
        const { customerName, email, phone, selectedProducts, status, comment } = req.body
        const newOrder = await db.query(`INSERT INTO orders (customerName, email, phone, selectedProducts, status, comment, creationTime) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [customerName, email, phone, selectedProducts, status, comment, new Date(Date.now())])
        res.json(newOrder.rows[0])
    }
    async getOrders(req, res) {
        const orders = await db.query(`SELECT * FROM orders`)
        res.json(orders.rows)
    }
    async getOrder(req, res) {
        const id = req.params.id
        const order = await db.query(`SELECT * FROM orders WHERE id = $1`, [id])
        res.json(order.rows[0])
    }
    async updateOrder(req, res) {
        const id = req.params.id
        const { customerName, email, phone, selectedProducts, status, comment } = req.body
        const order = await db.query(`UPDATE orders SET customerName = $1, email = $2, phone = $3, selectedProducts = $4, status = $5, comment = $6 WHERE id = $7 RETURNING *`, [customerName, email, phone, selectedProducts, status, comment, id])
        res.json(order.rows[0])
    }
    async deleteOrder(req, res) {
        const id = req.params.id
        const order = await db.query(`DELETE FROM orders WHERE id = $1`, [id])
        res.json(order.rows[0])
    }
}

module.exports = new OrdersController()