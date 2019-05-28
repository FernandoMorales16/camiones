const express = require('express');
const morgan = require('morgan');
const app = express();

require('./database');

// Configuracion 
app.set('port', process.env.PORT || 3000);

// Funciones ejecutadas
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/rutas', require('./routes/rutasRoutes'));

// Inicializar Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});