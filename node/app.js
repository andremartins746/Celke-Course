const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Salve mundo")
})

app.listen(3000, () => console.log('rodando '))