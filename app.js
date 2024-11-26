// imports
express = require("express")
const bodyParser = require("body-parser")
const jokesRouter = require("./resources/jokes.js")
const userRouter = require("./resources/user.js")
const cors = require('cors')
const path = require("path")


// configs
const app = express()
const port = 3000


// middleware
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  };
app.use(cors(corsOptions))
app.use(bodyParser.json())

// Routers
app.use("/jokes", jokesRouter)
app.use(express.static("frontend-jokes/dist"))
app.use("/user", userRouter)

// fallback route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend-jokes/dist", "index.html"))
})


// initialization
app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})