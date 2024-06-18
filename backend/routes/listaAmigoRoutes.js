const {Router } = require('express');
const controlador = require('../controllers/listaAmigosController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id?', controlador.listaAmigosGet);
router.post('/', controlador.listaAmigosPost);
router.delete('/:id?', controlador.listaAmigosDelete);

module.exports = router;