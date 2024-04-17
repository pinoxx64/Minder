const {Router } = require('express');
const controlador = require('../controllers/usuariosRolesController');
const router = Router();

router.get('/:id', controlador.usuariosRolesGet)
router.post('/', controlador.usuariosRolesPost)
router.put('/:id', controlador.usuariosRolesPut)
router.delete('/:id', controlador.usuariosRolesDelete)

module.exports = router;