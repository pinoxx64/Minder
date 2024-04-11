const {response,request} = require('express');
const Conexion = require('../database/conexionTipoPreferencia');

const tipoPreferenciaGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getTipoPreferencia(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const tipoPreferenciaPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postTipoPreferencia(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const tipoPreferenciaDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteTipoPreferencia(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const tipoPreferenciaPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putTipoPreferencia(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    tipoPreferenciaDelete,
    tipoPreferenciaPost,
    tipoPreferenciaPut,
    tipoPreferenciaGet
}