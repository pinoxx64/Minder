const {Router } = require('express');
const controlador = require('../controllers/chatController');
const router = Router();

router.get('/:id', controlador.chatGet)
router.post('/', controlador.chatPost)
router.put('/:id', controlador.chatPut)
router.delete('/:id', controlador.chatDelete)

module.exports = router;