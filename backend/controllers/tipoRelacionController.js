const {response,request} = require('express');
const Conexion = require('../database/conexionTipoRelacion');

const tipoRelacionGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getTipoRelacion(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const tipoRelacionPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postTipoRelacion(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const tipoRelacionDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteTipoRelacion(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const tipoRelacionPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putTipoRelacion(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    tipoRelacionDelete,
    tipoRelacionPost,
    tipoRelacionPut,
    tipoRelacionGet
}