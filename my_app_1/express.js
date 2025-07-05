const express = require('express');
const ap = express();
const swagger = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const rataDeUsuarios = require('./routes/rotaUsuarios');
const porta = 3000;


ap.use(express.json());
ap.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));
ap.use('/', rataDeUsuarios);



ap.listen(porta, () => {
    console.log("Localhost: ", porta);
});