const {Router } = require('express');
const controlador = require('../controllers/ninoPreferenciaController');
const router = Router();

router.get('/:id', controlador.ninoPreferenciaGet)
router.post('/', controlador.ninoPreferenciaPost)
router.put('/:id', controlador.ninoPreferenciaPut)
router.delete('/:id', controlador.ninoPreferenciaDelete)

module.exports = router;