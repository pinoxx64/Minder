const {Router } = require('express');
const controlador = require('../controllers/interesController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.interesGet);
router.post('/', controlador.interesPost);
router.put('/:id?', controlador.interesPut);
router.delete('/:id', controlador.interesDelete);

module.exports = router;