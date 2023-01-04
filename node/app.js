const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Salve mundo")
})

app.get('/contatos/:id', (req, res) => {
    // res.send("visualizar contatos")
    const {id} = req.params
    const {sit} = req.query
    return res.json({
        sit,
        id,
        "nome": "André",
        "email": "andremartins746@gmai.com"
    })
})

app.post('/contato', (req, res) => {
    const {nome, email} = req.body
    return res.json({
        nome,
        email
    })
})

app.listen(3000, () => console.log('rodando '))