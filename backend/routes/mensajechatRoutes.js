const {Router } = require('express');
const controlador = require('../controllers/mensajechatController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.mensajechatGet);
router.post('/', controlador.mensajechatPost);
router.put('/:id?', controlador.mensajeChatPut);
router.delete('/:id', controlador.mensajechatDelete);

module.exports = router;