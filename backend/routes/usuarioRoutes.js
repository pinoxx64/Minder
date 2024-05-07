const {Router } = require('express');
const controlador = require('../controllers/usuarioController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/', controlador.usuariosGet);
router.get('/:id?', controlador.usuarioGet);
router.post('/', controlador.usuariosPost);
router.put('/:id?', controlador.usuariosPut);
router.delete('/:id', controlador.usuariosDelete);

router.get('/roles/:id', controlador.getRolesUsuario);
module.exports = router;