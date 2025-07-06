const express =require('express');
const router = express.Router();
const createUsuarios = require('../controllers/usuarios');

router.post('/', createUsuarios.criarUsuario);
router.get('/', createUsuarios.listarUsuarios);
router.get('/:id', createUsuarios.ListaDeUsuarioUnico);
router.delete('/:id', createUsuarios.ExcluirUsuario);
router.put('/:id', createUsuarios.AtualizarUsuario);

module.exports = router;