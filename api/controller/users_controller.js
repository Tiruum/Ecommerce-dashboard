const db = require('../db')

class UsersController {
    async createUser(req, res) {
        console.log('started creating user');
        const { name, email, status } = req.body
        const newUser = await db.query(`INSERT INTO users (name, email, status, creationTime) values ($1, $2, $3, $4) RETURNING *`, [name, email, status, new Date(Date.now())])
        res.json(newUser.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }
    async getUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const id = req.params.id
        const { name, email, status } = req.body
        const user = await db.query(`UPDATE users SET name = $1, email = $2, status = $3 WHERE id = $4 RETURNING *`, [name, email, status, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM users WHERE id = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UsersController()