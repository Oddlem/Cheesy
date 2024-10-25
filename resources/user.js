// imports
const express = require("express")
const { create_user } = require("../services/user.js")

// configs
const router = express.Router()

// endpoints
router.post("/register", async (req, res) => {
    try {
        const result = await create_user(req.query)
        return res.status(200).send(result.rows)
    }
    catch (err) {
        await res.status(500).send(err.message)
    }
})

router.post("/sign-in", async (req, res) => {

})

// exports
module.exports = router

