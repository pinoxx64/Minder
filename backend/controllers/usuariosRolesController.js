const {response,request} = require('express');
const Conexion = require('../database/conexionUsuariosRoles');

const usuariosRolesGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.usuariosRolesGet()    
        .then( msg => {
  
            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se han encontrado registros'});
        });
}

const usuariosRolesGetIdUsu =  (req, res = response) => {
    const conx = new Conexion();
    conx.usuariosRolesGetId(req.params.idUser)    
        .then( msg => {
     
            res.status(200).json(msg);
        })
        .catch( err => {

            res.status(200).json({'msg':'No se han encontrado registros'});
        });
}

const usuariosRolesPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.usuariosRolesPost(req.body)    
        .then( msg => {
  
            res.status(201).json(msg);
        })
        .catch( err => {
      
            res.status(203).json(err);
        });
}

const usuariosRolesDelete =  (req, res) => {
    const conx = new Conexion();
    conx.usuariosRolesDelete(req.params.id)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const usuariosRolesPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.usuariosRolesPut(req.params.id, req.body.nombre)    
        .then( msg => {
  
            res.status(202).json(msg);
        })
        .catch( err => {

            res.status(203).json(err);
        });
}


module.exports = {
    usuariosRolesGet,
    usuariosRolesGetIdUsu,
    usuariosRolesDelete,
    usuariosRolesPost,
    usuariosRolesPut
}