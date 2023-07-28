const db = require('../db')

class ProductsController {
    async createProduct(req, res) {
        const { title, article, price, breadcrumbs, images, colors, sizes, description, details, tags } = req.body
        const newProduct = await db.query(`INSERT INTO products (title, article, price, breadcrumbs, images, colors, sizes, description, details, tags, creationTime) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [title, article, price, breadcrumbs, images, colors, sizes, description, details, tags, new Date(Date.now())])
        res.json(newProduct.rows[0])
    }
    async getProducts(req, res) {
        const products = await db.query(`SELECT * FROM products`)
        res.json(products.rows)
    }
    async getProduct(req, res) {
        const id = req.params.id
        const product = await db.query(`SELECT * FROM products WHERE id = $1`, [id])
        res.json(product.rows[0])
    }
    async updateProduct(req, res) {
        const id = req.params.id
        const { title, article, price, breadcrumbs, images, colors, sizes, description, details, tags } = req.body
        const product = await db.query(`UPDATE products SET title = $1, article = $2, price=$3, breadcrumbs = $4, images = $5, colors = $6 sizes = $7, description = $8, details = $9, tags = $10 WHERE id = $11 RETURNING *`, [title, article, price, breadcrumbs, images, colors, sizes, description, details, tags, id])
        res.json(product.rows[0])
    }
    async deleteProduct(req, res) {
        const id = req.params.id
        const product = await db.query(`DELETE FROM products WHERE id = $1`, [id])
        res.json(product.rows[0])
    }
}

module.exports = new ProductsController()