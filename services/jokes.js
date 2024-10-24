// imports
const {v4: uuidv4} = require("uuid")
const { create_jokes_dao, retrieve_jokes_dao } = require("../dao/jokes.js")

// data transformation
const create_jokes = async function (data) {
    const content = data.content
    const id = uuidv4()
    const source = "user"
    const source_url = data.source_url
    const created_at = new Date()
    const updated_at = new Date()
    const deleted_at = null

    const result = await create_jokes_dao({
        content,
        id,
        source,
        source_url,
        created_at,
        updated_at,
        deleted_at
    })
    return result
}

const retrieve_jokes = async function () {
    return await retrieve_jokes_dao()
}

module.exports = {
    create_jokes,
    retrieve_jokes
}