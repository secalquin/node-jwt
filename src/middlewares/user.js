const jwt = require('jwt-simple');
const moment = require('moment');
const userMiddleware = {};

userMiddleware.checkToken = async (req, res, next) => {
    var token = req.headers.authorization;
    if(!token){
        return res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
    }
    token = token.replace("Bearer ", "").replace(/['"]+/g, '');

    try {
      var payload = jwt.decode(token,process.env.APP_KEY);
      if(payload.exp <= moment().unix()){ //Menor a la fecha actual, fecha de expiración
        res.json({message: "Token ha expirado"});
      }
    } catch (error) {
      res.json({message: "Token no válido!"});
    }

    req.user = payload;
    next();
};

module.exports = userMiddleware;