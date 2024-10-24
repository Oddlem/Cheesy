// imports
express = require("express")
const bodyParser = require("body-parser")
const jokesRouter = require("./resources/jokes.js")

// configs
const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())
app.use("/jokes", jokesRouter)

// initialization
app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})