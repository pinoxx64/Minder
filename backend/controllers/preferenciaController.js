const {response,request} = require('express');
const Conexion = require('../database/conexionPreferencia');

const preferenciaGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getPreferencia(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const preferenciaPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postPreferencia(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const preferenciaDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deletePreferencia(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const preferenciaPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putPreferencia(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    preferenciaDelete,
    preferenciaPost,
    preferenciaPut,
    preferenciaGet
}