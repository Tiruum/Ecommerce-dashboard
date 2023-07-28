const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "Selin2002",
    host: "localhost",
    port: "5432",
    database: "node_postgres"
})

module.exports = pool