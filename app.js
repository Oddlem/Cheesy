// imports
express = require("express")
const bodyParser = require("body-parser")
const jokesRouter = require("./resources/jokes.js")
const userRouter = require("./resources/user.js")
const cors = require('cors')


// configs
const app = express()
const port = 3000


// middleware
app.use(cors())
app.use(bodyParser.json())
app.use("/jokes", jokesRouter)
app.use("/user", userRouter)


// initialization
app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})