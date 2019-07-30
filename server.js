const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect(
    'Link de conexão', 
    { useNewUrlParser: true }
)
requireDir('./src/models')

const Product = mongoose.model('Product')

// Primeira rota
app.get("/", (req, res) => {
    Product.create({
        title: 'RafaWorks Test ♥',
        description: 'Oh yeah!',
        url: 'https://rafaworks.com.br'
    });
    return res.send("Hello RafaWorks")
})

app.listen(3001)