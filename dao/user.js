const { pool } = require("../db.js")

const create_user_dao = async function (data) {
    const sql = `INSERT INTO users(
        username,
        password,
        id,
        created_at,
        updated_at,
        deleted_at
        ) VALUES ($1, $2, $3, $4, $5, $6)
        returning username, password, id, created_at, updated_at, deleted_at`

    const parameters = [data.username, data.password, data.id, data.created_at, data.updated_at, data.deleted_at]
    const result = await pool.query(sql, parameters)

    return result
}

const retrieve_user_dao = async function (data) {
    const sql = `SELECT password FROM users WHERE username = $1`
    const parameters = [data.username]
    const result = await pool.query(sql, parameters)

    return result.rows[0]?.password
}

module.exports = {
    create_user_dao,
    retrieve_user_dao
}