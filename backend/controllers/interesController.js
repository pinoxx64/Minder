const {response,request} = require('express');
const Conexion = require('../database/conexionInteres');

const interesGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getInteres(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const interesPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postInteres(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const interesDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteInteres(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const interesPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putInteres(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    interesDelete,
    interesPost,
    interesPut,
    interesGet
}