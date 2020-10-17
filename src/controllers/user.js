const jwt = require('jwt-simple');
const axios = require('axios');
const moment = require('moment');
const userController = {};


userController.index = async (req, res) => {
    return res.status(200).json({ msg: 'User Index Route' });
};

userController.login = async (req,res) => {
    const { username, password } = req.body;
  
    if( !(username === 'prueba' && password === '1234') ){
        return res.status(401).send({
        error: 'Usuario o contraseña inválidos'
      })
    }
    
    const FetchDataUserExample = await axios.get('https://jsonplaceholder.typicode.com/users/1'); //Cree esta variable solo para retornar algún tipo de información de usuario.
    var payload = FetchDataUserExample.data;
        payload.iat = moment().unix();
        payload.exp = moment().add(1,'hours').unix(); //
  
    var token = jwt.encode(payload, process.env.APP_KEY);
  
    res.json(
        {
            user: payload,
            token: token,
            type: "bearer",
        });
};

userController.profile = async (req, res) => {
  return res.json(req.user);
}

userController.ListMyPosts = async (req, res) => {
    const { id } = req.user;
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }/posts`);

    res.json(data);
};

userController.NotFound = async (req, res) => {
    res.status(404).json( { message: "Not Found" } );
};

module.exports = userController;