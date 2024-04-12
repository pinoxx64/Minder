const {Router } = require('express');
const controlador = require('../controllers/mensajeChatController');
const router = Router();

router.get('/:id', controlador.mensajeChatGet)
router.post('/', controlador.mensajeChatPost)
router.put('/:id', controlador.mensajeChatPut)
router.delete('/:id', controlador.mensajeChatDelete)

module.exports = router;