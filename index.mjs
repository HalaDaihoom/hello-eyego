import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    const message = "Hello Eyego"
    res.send(message)
})

app.listen(PORT, () => {
    console.log(`Eyego is listenning at port ${PORT}`)
})