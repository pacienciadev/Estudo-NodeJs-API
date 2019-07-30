const express = require('express')
const mongoose = require('mongoose')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect('mongodb+srv://@cluster0-qrvrm.mongodb.net/test?retryWrites=true&w=majority')

// Primeira rota
app.get("/", (req, res) => {
    res.send("Hello RafaWorks")
})

app.listen(3001)