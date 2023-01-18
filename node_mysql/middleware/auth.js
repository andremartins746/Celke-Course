var jwt = require("jsonwebtoken")
var {promisify} = require("util")


module.exports = {
    eAdmin:  async function (req, res, next) {
        //return res.json({messagem: "Validar token"});
        const authHeader = req.headers.authorization;
        const [bearer, token] =  authHeader.split(' ');
    
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
    }
}