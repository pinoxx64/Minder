const {Router } = require('express');
const controlador = require('../controllers/tipopreferenciaController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.tipopreferenciaGet);
router.post('/', controlador.tipopreferenciaPost);
router.put('/:id?', controlador.tipopreferenciaPut);
router.delete('/:id', controlador.tipopreferenciaDelete);

module.exports = router;