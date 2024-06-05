
const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {validateValues}=require('../helpers/validar-campos')

const controller=require('../controllers/authController')
const {emailExist} = require('../helpers/db-validators');

    router.put('/login',controller.login)
    router.post('/register',
    [
        check('correo').custom( emailExist),
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('contrasena', 'La contraseña debe de ser más de 6 letras').isLength({ min: 6 }),
        check('correo', 'El correo no es válido').isEmail(),
        validateValues
    
     ],
     controller.register
    )
    

    module.exports = router;