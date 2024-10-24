const { pool } = require("../db.js")

const create_jokes_dao = async function (data) {
    const sql = `INSERT INTO jokes(
        content,
        id,
        source,
        source_url,
        created_at,
        updated_at,
        deleted_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        returning content, id, source, source_url, created_at, updated_at, deleted_at`
    const parameters = [data.content, data.id, data.source, data.source_url, data.created_at, data.updated_at, data.deleted_at]
    const result = await pool.query(sql, parameters)

    return result
}

const retrieve_jokes_dao = async function (data) {
    const sql = `SELECT * FROM jokes`
    const parameters = []
    const result = await pool.query(sql)

    return result
}

module.exports = {
    create_jokes_dao,
    retrieve_jokes_dao
}