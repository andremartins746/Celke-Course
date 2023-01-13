const express = require("express")
const Usuario = require("./models/Usuario")

const app = express()
app.use(express.json())


app.get('/usuarios', async (req, res) => {

    const data =  await Usuario.findAll()

res.json({
    erro: false,
    data
})
})

app.get('/usuario/:id', async (req, res) => {
    const {id} = req.params
   
    
    const data =  await Usuario.findAll({where:{
        id:  parseInt(id)
    }})

    res.json({
        erro: false,
       data
    })
})

app.post('/user', async (req, res) => {
    const {name, email} = req.body
    await Usuario.create({
        name:name,
        email: email
    })
    .then(() => {
        console.log('cadastrou')
    })
    .catch(() => {
        console.log("nao cadastrou")
    })
    res.json({
        erro: false,

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