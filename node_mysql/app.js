const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({
        erro:false,
        nome: "andré",
        email: "andremartins746@gmail.com"
    })
})  

app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params
    res.json({
        erro:false,
        id: id,
        nome: "andré",
        email: "andremartins746@gmail.com"
    })

})

app.listen(3000, () => console.log('Servidor rodando em: localhost:3000/'))