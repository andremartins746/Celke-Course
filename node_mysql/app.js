const express = require("express")
const app = express()

app.get('/', (req, res) => {
res.json({
    erro: false,
    nome: "André",
    email: "Andremartfins746@gmail.com"
})
})

app.listen(3000, () => console.log("rodando"))