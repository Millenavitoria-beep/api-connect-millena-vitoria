const express = require('express');
const router = express.Router();

const {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
} = require('../controllers/usuariosController');

router.get('/', listarUsuarios);
router.get('/:id', buscarUsuarioPorId);
router.post('/', cadastrarUsuario);
router.patch('/:id', atualizarUsuario);
router.delete('/:id', removerUsuario);

module.exports = router;