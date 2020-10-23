const express = require('express');
const app = express();
const env = require('dotenv');

// Settings
env.config({path: __dirname + '/.env'}); //Configurando .ENV
app.set('port', process.env.APP_PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
// Creo un prefijo para la api que se llama URL/api/ y luego se le agrega el path de la ruta
app.use('/api/users',require('./routes/user'));
app.use('/api/posts',require('./routes/post'));

app.listen(app.get('port'), () => {
    console.log('Sever on port: ' + app.get('port'));
});

