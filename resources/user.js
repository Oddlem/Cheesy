// imports
const express = require("express")
const bcrypt = require("bcrypt")
const { create_user } = require("../services/user.js")
const { validate_data, user_schema } = require("../middleware/user.js")
const jwt = require("jsonwebtoken")
const { retrieve_user_dao: retrieve_password_dao } = require("../dao/user.js")

// configs
const router = express.Router()
const secret_key = `${process.env.JWT_KEY}`

// endpoints
router.post("/register", validate_data(user_schema), async (req, res) => {
    try {
        const result = await create_user(req.query)
        return res.status(200).send(result.rows)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.post("/sign-in", async (req, res) => {
    try {
        const password = await retrieve_password_dao(req.body)


        bcrypt.compare(req.body.password, password, function(err, result) {

            if (err) {
                return res.status(500).send(err.message)
            }
            else if (result) {
                const user_token = jwt.sign({password: password}, secret_key, {expiresIn: "1hr"})
                console.log(user_token)
                return res.status(200).set("Authorization", `Bearer ${user_token}`).json("Successfully logged in")
            }
            else {
                
                return res.status(400).send("Incorrect password")
            }
        })
    }

    catch (err) {
        return res.status(500).send(err.message)
    }
})

    // try {
    //     const check_password = async () => {
    //         const match = await bcrypt.compare(req.query.password, user_db.password)
    
    //         if (match)
    //             return await res.status(200).send(console.log("Login successful"))
    
    //         }        
    //     }
    //     catch {
    //         if (!check_password)
    //             throw ("Password doesn't exist")
    //     }
    
    //     const user_token = jwt.sign(user_db.username, process.env.JWT_KEY)
    //     res.status(200).send(user_token)
    
    //     return console.log("Token has sent", user_token)

// exports
module.exports = router