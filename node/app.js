const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Salve mundo")
})

app.get('/contatos/:id', (req, res) => {
    // res.send("visualizar contatos")
    const {id} = req.params
    const {sit} = req.query
    return res.json({
        sit: sit,
        id: id,
        "nome": "André",
        "email": "andremartins746@gmai.com"
    })
})

app.listen(3000, () => console.log('rodando '))