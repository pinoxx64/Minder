const {response,request} = require('express');
const Conexion = require('../database/conexionUsuarioEvento');

const usuarioEventoGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getUsuarioEvento(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const usuariosEventoPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postUsuarioEvento(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const usuariosEventoDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteUsuarioEvento(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const usuariosEventoPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putUsuarioEvento(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    usuariosEventoDelete,
    usuariosEventoPost,
    usuariosEventoPut,
    usuarioEventoGet
}