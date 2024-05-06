const {Router } = require('express');
const controlador = require('../controllers/rolController');
const router = Router();

//El segundo parámetro (optativo) son los middlewares.
router.get('/:id', controlador.rolGet);
router.post('/', controlador.rolPost);
router.put('/:id?', controlador.rolPut);
router.delete('/:id', controlador.rolDelete);

module.exports = router;