
const {Router} = require('express');
const router = Router();

const controller=require('../controllers/authController')
const {emailExist} = require('../helpers/db-validators');

    router.put('/login',controller.login)
    

    module.exports = router;