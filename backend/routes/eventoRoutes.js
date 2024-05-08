const {Router } = require('express');
const controlador = require('../controllers/eventoController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.eventoGet);
router.post('/', controlador.eventoPost);
router.put('/:id?', controlador.eventoPut);
router.delete('/:id', controlador.eventoDelete);

module.exports = router;