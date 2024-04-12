const {Router } = require('express');
const controlador = require('../controllers/tipoPreferenciaController');
const router = Router();

router.get('/:id', controlador.tipoPreferenciaGet)
router.post('/', controlador.tipoPreferenciaPost)
router.put('/:id', controlador.tipoPreferenciaPut)
router.delete('/:id', controlador.tipoPreferenciaDelete)

module.exports = router;