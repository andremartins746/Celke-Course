const express = require("express")
const Usuario = require("./models/Usuario")
const bcryptjs = require("bcryptjs")

const app = express()
app.use(express.json())


app.get('/users', async (req, res) => {
    await Usuario.findAll({
        order:[['id', 'DESC']],    //DESC decrecente - ASC crecente - colocando em ordem decrecente (do ultimo ate o primeiro)
        attributes: ['id', 'name', 'email', 'password']  // escolhendo quais colunas retornar do BD
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
    var dados = req.body

    //CRIPTOGRAFANDO A SENHA
   dados.password = await bcryptjs.hash(dados.password, 8)

    await Usuario.create(dados)
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

app.put('/user', async (req, res) => {
    const {id ,name, email} = req.body

    await Usuario.update(req.body, {where:{id}})
    .then(() => {
        return res.status(200).json({
            erro:false,
            mensagem:"Usuario editado com sucesso!"
           })
    })
    .catch(() => {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Usuario editado com sucesso!"
           })
    })

})


app.put('/user-senha', async (req, res) => {
    const {id, password} = req.body

   var senhacrypt =  await bcryptjs.hash(password, 8)

    await Usuario.update({password: senhacrypt}, {where:{id}})
    .then(() => {
        return res.status(200).json({
            erro:false,
            mensagem:"Senha editado com sucesso!"
           })
    })
    .catch(() => {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Senha editado com sucesso!"
           })
    })

})

app.delete('/user/:id', async (req, res) => {
    const {id} = req.params
    await Usuario.destroy({
        where:{
            id
        }
    })
    .then(() => {
        return res.json({
            erro: false,
            mensagem:"Usuario APAGADO com sucesso!"
           })
    })
    .catch(() => {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Usuario NÂO APAGADO com sucesso!"
           })
    })
    res.json({
        erro: false,
        id,
       
    })
})

app.post("login", async (req, res) => {
    const data = req.body
    console.log( await data)
    res.json({
        erro:false,
        mensagem:"Login realizado com sucesso!"
       })
})

app.listen(8080, () => console.log("rodando"))