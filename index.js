import http from "http"
import express from "express"

const PORT = 3000

const app = express()
app.use(express.json())

const server = http.createServer(app)

app.get("/", (req, res) => {
    res.json({
        message: "hello, welcome"
    })
})

server.listen(PORT, () => {
    console.log("Server started")
})