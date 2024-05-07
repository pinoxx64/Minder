const {Router } = require('express');
const controlador = require('../controllers/interespreferenciaController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.interespreferenciaGet);
router.post('/', controlador.interespreferenciaPost);
router.put('/:id?', controlador.interespreferenciaPut);
router.delete('/:id', controlador.interespreferenciaDelete);

module.exports = router;