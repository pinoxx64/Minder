const {response,request} = require('express');
const Conexion = require('../database/conexionNinoPreferencia');

const ninoPreferenciaGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getNinoPreferencia(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const ninoPreferenciaPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postNinoPreferencia(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const ninoPreferenciaDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteNinoPreferencia(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const ninoPreferenciaPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putNinoPreferencia(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    ninoPreferenciaDelete,
    ninoPreferenciaPost,
    ninoPreferenciaPut,
    ninoPreferenciaGet
}