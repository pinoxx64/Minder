const {Router } = require('express');
const controlador = require('../controllers/usuariorolController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.usuariorolGet);
router.post('/', controlador.usuariorolPost);
router.put('/:id?', controlador.usuariorolPut);
router.delete('/:id', controlador.usuariorolDelete);

module.exports = router;