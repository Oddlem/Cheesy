const Joi = require("joi")

const validate_data = (schema) => {
    const user_middleware = (req, res, next) => {
        const { error } = schema.validate(req.body) 

        if (error) {
            return res.status(400).send(error.details[0].message)
        }
        
        else {
            next()
        }
    }
    return user_middleware
}

const user_schema = Joi.object({
    username: Joi.string().required().not(null),
    password: Joi.string().required().not(null)
})

module.exports = {
    validate_data,
    user_schema
}