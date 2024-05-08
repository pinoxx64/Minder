const {Router } = require('express');
const controlador = require('../controllers/ninopreferenciaController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.ninopreferenciaGet);
router.post('/', controlador.ninopreferenciaPost);
router.put('/:id?', controlador.ninopreferenciaPut);
router.delete('/:id', controlador.ninopreferenciaDelete);

module.exports = router;