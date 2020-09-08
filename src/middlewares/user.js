const jwt = require('jsonwebtoken');
const userMiddleware = {};

userMiddleware.checkToken = async (req, res) => {
    var token = req.headers['authorization']
    if(!token){
        return res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'Secret Password', function(err, user) {
      if (err) {
        return res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        return res.json({
          message: user
        })
      }
    })
};

module.exports = userMiddleware;