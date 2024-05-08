const express = require('express');

const paisesRoutes = require('./routes/paises-ciudades');

const app = express();

app.use('/api/paises',paisesRoutes)

app.listen(3000, () => {
    console.log('Servidor Express en funcionamiento en el puerto 3000');
});