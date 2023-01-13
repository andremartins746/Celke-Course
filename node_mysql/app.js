const express = require("express")
const Usuario = require("./models/Usuario")

const app = express()
app.use(express.json())


app.get('/users', async (req, res) => {
    await Usuario.findAll({
        order:[['id', 'DESC']],    //DESC decrecente - ASC crecente - colocando em ordem decrecente (do ultimo ate o primeiro)
        attributes: ['id', 'name', 'email']  // escolhendo quais colunas retornar do BD
    })
        .then((users) => {
            res.json({
                erro: false,
                users
            })
        })
        .catch(() => {
           return res.status(400).json({
            erro:true,
            mensagem:"Erro: Nenhum Usuario encontrado"
           })
        })

})

app.get('/user/:id', async(req, res) => {
    const {id} = req.params
    // await Usuario.findAll({where:{id: parseInt(id)}})
    await Usuario.findByPk(parseInt(id))
    .then((user) => {
        res.json({
            erro: false,
            user
        })
    })
    .catch(() => {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Nenhum Usuario encontrado"
           })
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
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Usuario não cadastrado!"
           })
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