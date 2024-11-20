const Joi = require("joi")

const jokes_schema = Joi.object({
    content: Joi.string().required()
})

module.exports = {
    jokes_schema
}