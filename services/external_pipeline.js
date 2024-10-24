// imports
const axios = require("axios")
const { uuidv4 } = require("uuid")

const extract_data = async function (api) {
    const result = await axios.get(api)
    return result.data
}

const ninja_pipeline = () => {
    extract_data("https://api.api-ninjas.com/v1/jokes")
    .then((ninjas_data) => {
        let data = {
            
        }
    })
}