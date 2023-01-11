const express = require("express")
const app = express()
app.use(express.json())

app.get('/usuarios', (req, res) => {
res.json({
    erro: false,
    nome: "André",
    email: "Andremartfins746@gmail.com"
})
})

app.get('/usuario/:id', (req, res) => {
    const {id} = req.params
    res.json({
        erro: false,
        id,
        nome: "André",
        email: "Andremartfins746@gmail.com"
    })
})

app.post('/usuario/', (req, res) => {
    const {nome, email} = req.body
    res.json({
        erro: false,
        nome,
        email
    })
})
app.put('/usuario', (req, res) => {
    const {id ,nome, email} = req.body
    res.json({
        erro: false,
        id,
        nome,
        email
    })
})

app.delete('/usuario/:id', (req, res) => {
    const {id} = req.params
    res.json({
        erro: false,
        id,
       
    })
})


app.listen(8080, () => console.log("rodando"))