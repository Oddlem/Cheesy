// imports
const express = require("express")

const { jokes_schema } = require("../schema/jokes.js")

const { create_jokes, retrieve_jokes } = require("../services/jokes.js")

// configs
const router = express.Router()

// endpoints
router.post("/new", async (req, res) => {
    const { error } = jokes_schema.validate(req.body)

    if (error)
        return res.status(400).send(error.details[0].message)

    const result = await create_jokes(req.body)
    return res.send(result.rows)
})

router.get("/joke", async (req, res) => {
    const result = await retrieve_jokes(req.body)

    return res.send(result)
})

// exports
module.exports = router