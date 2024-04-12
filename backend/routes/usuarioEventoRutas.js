const {Router } = require('express');
const controlador = require('../controllers/usuarioEventoController');
const router = Router();

router.get('/:id', controlador.usuarioEventoGet)
router.post('/', controlador.usuariosEventoPost)
router.put('/:id', controlador.usuariosEventoPut)
router.delete('/:id', controlador.usuariosEventoDelete)

module.exports = router;