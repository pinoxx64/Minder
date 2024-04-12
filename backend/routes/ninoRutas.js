const {Router } = require('express');
const controlador = require('../controllers/ninoController');
const router = Router();

router.get('/:id', controlador.ninoGet)
router.post('/', controlador.ninoPost)
router.put('/:id', controlador.ninoPut)
router.delete('/:id', controlador.ninoDelete)

module.exports = router;