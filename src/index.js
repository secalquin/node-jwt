const express = require('express');
const app = express();
const morgan = require('morgan');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
// Creo un prefijo para la api que se llama URL/api/ y luego se le agrega el path de la ruta
app.use('/api',require('./routes/user'));

app.listen(app.get('port'), () => {
    console.log('Sever on port: ' + app.get('port'));
});