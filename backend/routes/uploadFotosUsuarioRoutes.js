const { Router } = require('express');
const { validarArchivoSubir } = require('../middleware/validar-archivo');
const { actualizarImagen, obtenerImagen, borrarImagen, cargarImagen } = require('../controllers/uploadsFotoEventosController');

const router = Router();

router.post( '/',validarArchivoSubir, cargarImagen );
router.put('/:id', validarArchivoSubir, actualizarImagen )
router.delete('/:id', borrarImagen  )
router.get('/:id', obtenerImagen  )  

module.exports = router;