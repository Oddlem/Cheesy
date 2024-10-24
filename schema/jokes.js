const Joi = require("joi")

const jokes_schema = Joi.object({
    content: Joi.string().required(),
    source: Joi.string().required(),
    source_url: Joi.string().allow("")
})

module.exports = {
    jokes_schema
}