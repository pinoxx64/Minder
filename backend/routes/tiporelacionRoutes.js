const {Router } = require('express');
const controlador = require('../controllers/tiporelacionController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.tiporelacionGet);
router.post('/', controlador.tiporelacionPost);
router.put('/:id?', controlador.tiporelacionPut);
router.delete('/:id', controlador.tiporelacionDelete);

module.exports = router;