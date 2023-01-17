const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('./models/Usuario');
const app = express();

app.use(express.json());

// RETORNA TODOS OS USUARIOS.
app.get("/users", validarToken, async (req, res) => {

    await User.findAll({
        attributes: ['id', 'name', 'email', 'password'],
        order: [['id', 'DESC']]
    })
        .then((users) => {
            return res.json({
                erro: false,
                users
            });
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuário encontrado!"
            });
        });
});

// RETORNA UM CERTOO USUARIO.
app.get("/user/:id", validarToken, async (req, res) => {
    const { id } = req.params;

    //await User.findAll({ where: { id: id } })
    await User.findByPk(id)
        .then((user) => {
            return res.json({
                erro: false,
                user: user
            });
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuário encontrado!"
            });
        });
});

// CADASTRA UM USUARIO.
app.post("/user", validarToken, async (req, res) => {
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);

    await User.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário cadastrado com sucesso!"
            });
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
        });
});

// EDITA UM USUARIO.
app.put("/user", validarToken, async (req, res) => {
    const { id } = req.body;

    await User.update(req.body, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário editado com sucesso!"
            });

        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não editado com sucesso!"
            });
        });
});

// EDITA A SENHA DE UM USUARIO.
app.put("/user-senha", validarToken, async (req, res) => {
    const { id, password } = req.body;

    var senhaCrypt = await bcrypt.hash(password, 8);

    await User.update({ password: senhaCrypt }, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Senha editada com sucesso!"
            });

        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Senha não editada com sucesso!"
            });
        });
});

// APAGA UM USUARIO.
app.delete("/user/:id", validarToken, async (req, res) => {
    const { id } = req.params;

    await User.destroy({ where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário apagado com sucesso!"
            });
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não apagado com sucesso!"
            });
        });
});

// BACKEND DO LOGIN DO USUARIO.
app.post('/login', async (req, res) => {
    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email
        }
    });
    if (user === null) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não encontrado!"
        });
    };

    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Senha inválida!"
        });
    };

    var token = jwt.sign({ id: user.id }, 'tnX685!8!hN!haOrjRgngMxWh', {
        //expiresIn: 600 // 10min
        expiresIn: '7d', // 7 dia
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
});

// VALIDAÇÃO DO TOKEN DO USUARIO.
async function validarToken(req, res, next) {
    //return res.json({messagem: "Validar token"});
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(' ');

    if (!token) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        });
    };

    try {
        const decoded = await promisify(jwt.verify)(token, 'tnX685!8!hN!haOrjRgngMxWh');
        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({
            erro: true,
            mensagem: "Erro: Necessário realizar o login para acessar a página!"
        });
    }
};

// INICIALIZANDO O SERVIDOR.
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});