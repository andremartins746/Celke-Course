const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Usuario = require("./models/Usuario")
const {promisify} = require("util")
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

app.get('/user/:id', ValidarToken, async(req, res) => {
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

app.post("/login", async (req, res) => {
    const user = await Usuario.findOne({ attributes:["id", "name", "email", "password"], where:{email:req.body.email}})
    if(user === null) {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Usuario não encontrado!"
        })
    }

    if(!(await bcryptjs.compare(req.body.password, user.password))) {
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: Senha invalida!"
        })
    }

   const token =  jwt.sign({id: user.id}, 'chamapapai', {expiresIn: '7d'})
   return res.json({
        erro:false,
        mensagem:"Login realizado com sucesso!",
        token
       })
})

async function ValidarToken(req, res, next) {
    const autHeader = req.headers.authorization

    const [bearer, token] = autHeader.split(' ')
    if(!token){
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: necessario realizar o login!"
        })
    }

    try{
       const decoded = await promisify(jwt.verify(token, 'chamapapai'))
        req.userId = decoded.id
        return next()
    }
    catch{
        return res.status(400).json({
            erro:true,
            mensagem:"Erro: token invalido!"
        })
    }
    return res.json({
     mensagem: token,
     
    })
    return autHeader
    //return next()
}

app.listen(8080, () => console.log("rodando"))