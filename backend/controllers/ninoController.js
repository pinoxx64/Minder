const {response,request} = require('express');
const Conexion = require('../database/conexionNino');

const ninoGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getNino(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const ninoPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postNino(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const ninoDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteNino(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const ninoPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putNino(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    ninoDelete,
    ninoPost,
    ninoPut,
    ninoGet
}