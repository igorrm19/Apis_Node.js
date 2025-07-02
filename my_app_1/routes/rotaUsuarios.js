const express =require('express');
const router = express.Router();
const createUsuarios = require('../controllers/usuarios');

router.post('/', createUsuarios.criarUsuario);
router.get('/', createUsuarios.listarUsuarios);

module.exports = router;