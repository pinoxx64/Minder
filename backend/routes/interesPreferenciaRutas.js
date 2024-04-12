const {Router } = require('express');
const controlador = require('../controllers/interesPreferenciaController');
const router = Router();

router.get('/:id', controlador.interesPreferenciaGet)
router.post('/', controlador.interesPreferenciaPost)
router.put('/:id', controlador.interesPreferenciaPut)
router.delete('/:id', controlador.interesPreferenciaDelete)

module.exports = router;