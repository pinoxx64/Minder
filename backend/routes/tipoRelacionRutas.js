const {Router } = require('express');
const controlador = require('../controllers/tipoRelacionController');
const router = Router();

router.get('/:id', controlador.tipoRelacionGet)
router.post('/', controlador.tipoRelacionPost)
router.put('/:id', controlador.tipoRelacionPut)
router.delete('/:id', controlador.tipoRelacionDelete)

module.exports = router;