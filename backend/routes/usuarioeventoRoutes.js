const {Router } = require('express');
const controlador = require('../controllers/usuarioeventoController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.usuarioeventoGet);
router.post('/', controlador.usuarioeventoPost);
router.put('/:id?', controlador.usuarioeventoPut);
router.delete('/:id', controlador.usuarioeventoDelete);

module.exports = router;