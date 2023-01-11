const express = require('express')
const app = express()

app.use(express.json())

// app.use('/', (req,res, next )=> {

//     console.log('Acessou o middleware')
//     next()
// })

function ValContato (req, res, next) {
    !req.body.email ?  res.json({erro: true, mensagem:"Necessário enviar o email"}) : next()
}

app.get('/', (req, res) => {

    console.log("Acessou a rota Listar")
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

app.post('/contato', ValContato ,(req, res) => {
    const {nome, email} = req.body
    return res.json({
        nome,
        email
    })
})

app.put("/contato/:id", (req, res) => {
    const {id} = req.params
    const {nome, email, _id} = req.body


   return res.json({
        _id,
        id,
        nome,
        email

    })
})

app.delete("/contato/:id", (req, res) => {
        const {id} = req.params

        return res.json({
            id
        })
})

app.listen(3000, () => console.log('rodando '))