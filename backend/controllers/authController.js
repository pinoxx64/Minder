const {response,request} = require('express');
const Conexion = require('../database/conexionUsuario');
const bcrypt = require('bcrypt');
const {generarJWT} = require('../helpers/generar-jwt')
const ConexionRol=require('../database/conexionUsuariorol')

const login =  (req, res = response) => {
    const {correo, contrasena} = req.body;
    try{
        const conx = new Conexion();
        u = conx.checkLogin(correo) 
            .then( usu => {
                bcrypt.compare(contrasena, usu.contrasena, (err, result) => {
                    if (result) {
                        /*conx.getRolUserId(usu.id)
                        .then(roles=>{
                            let r=[]
                            for(let i=0;i<roles.usuariorol.length;i++){
                                r.push(roles.usuariorol[i].rol.nombre)
                            }
                            
                
                        })*/
                        const token = generarJWT(usu.id,usu.nombre)
                            res.status(200).json({token});
                    } else {
                        
                        res.status(500).json({'msg':'La contraseña no es válida.'});
                    }
                 })
                 ;

            })
            .catch( err => {
                res.status(500).json({'msg':'Login incorrecto.'});
            });
    }
    catch(error){
      
        res.status(500).json({'msg':'Error en el servidor.'});
    }
    
}

const register =  (req, res = response) => {
    try{
        const conx = new Conexion();
        conx.registrarUsuario(req.body)    
        .then( usu => {
       
            let data={
                idUser: usu,
                idRol: 2
            }
                const conxRol=new ConexionRol()
                a=conxRol.registrarUsuarioRol(data)
                .then(a=>{

                    const token = generarJWT(usu,['Usuario'],req.body.nombre)
                    res.status(200).json({msg:'Registro correcto',token});
                })
                .catch(err=>{
                    res.status(400).json({msg:'Usuario registrado sin rol'})
                })
            })
            .catch( err => {

                res.status(500).json({'msg':err});
            });
    }
    catch(error){
       
        res.status(500).json({'msg':'Error en el servidor.'});
    }
    
}

module.exports = {
  login,
  register
}