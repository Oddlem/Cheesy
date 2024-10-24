const { Pool } = require("pg")
const { v4: uuidv4 } = require('uuid')

let pool = null

const database = async function () {
    if (!pool) {
        pool = new Pool({
            user: "postgres",
            password: "changeme",
            host: "0.0.0.0",
            port: 5432,
            database: "fullstack-jokes"
        })
        try{
            await pool.connect()
            console.log("Connection successful")
        } catch (err) {
            console.error("Could not connect to database:", (err))
        }
    }
}

const createJokesTable = async function (data) {
    const sql = await pool.query(`CREATE TABLE IF NOT EXISTS jokes(
        content text,
        id uuid,
        source varchar,
        source_url varchar,
        created_at timestamp,
        updated_at timestamp,
        deleted_at timestamp
        )`)
}

database().then(() => {
    return createJokesTable()
})
.then(async () => {
    console.log("Table 'jokes' has been created")
    const test = await pool.query(`SELECT * FROM jokes;`)
})
.catch(err => console.log(err))

module.exports = { pool }