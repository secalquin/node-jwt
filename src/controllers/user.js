const jwt = require('jsonwebtoken');
const userController = {};


userController.index = async (req, res) => {
    return res.status(200).json({ msg: 'User Index Route' });
};

userController.login = async (req,res) => {
    var username = req.body.user
    var password = req.body.password
  
    if( !(username === 'prueba' && password === '1234') ){
        return res.status(401).send({
        error: 'Usuario o contraseña inválidos'
      })
    }
  
    var tokenData = {
      username: username
      // ANY DATA
    }
  
    var token = jwt.sign(tokenData, 'Secret Password', {
       expiresIn: 60 * 60 * 24 // expires in 24 hours
    })
  
    res.json(
        {
            user: tokenData,
            token: token,
            type: "bearer",
            expire: 60 * 60 * 24
        });
};

module.exports = userController;