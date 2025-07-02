const express = require('express');
const ap = express();
const rataDeUsuarios = require('./routes/rotaUsuarios')
const porta = 3000;


ap.use(express.json());
ap.use('/', rataDeUsuarios);


ap.listen(porta, () => {
    console.log("Localhost: ", porta);
});