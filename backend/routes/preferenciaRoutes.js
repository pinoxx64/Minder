const {Router } = require('express');
const controlador = require('../controllers/preferenciaController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/', controlador.prefereciasGet)
router.get('/:idUsuario', controlador.preferenciaGet);
router.post('/', controlador.preferenciaPost);
router.put('/:id?', controlador.preferenciaPut);
router.delete('/:id', controlador.preferenciaDelete);

module.exports = router;