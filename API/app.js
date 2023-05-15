import express, { json } from "express"
import cors from "cors"
// routes
import showItems from "./routes/showItems.js"

const app = express()
const PORT = 3000

// middlewares
app.use(express.json())
app.use(cors())

// ? routing
app.use("/upload", showItems)

app.listen(PORT, () => { console.log("listening on port 3000") })