// imports
const { create_user_dao } = require("../dao/user.js")
const {v4: uuidv4} = require("uuid")

// middleware
const bcrypt = require("bcrypt")

const create_user = async (data) => {
    const username = data.username
    const password = await bcrypt.hash(data.password, 10)
    const id = uuidv4()
    const created_at = new Date()
    const updated_at = new Date()
    const deleted_at = null

    const result = await create_user_dao({
        username,
        password,
        id,
        created_at,
        updated_at,
        deleted_at
    })

    return result
}

module.exports = {
    create_user
}