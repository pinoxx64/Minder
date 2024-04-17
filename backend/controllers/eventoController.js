const {response,request} = require('express');
const Conexion = require('../database/conexionEvento');

const eventoGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getEvento(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const eventoPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postEvento(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const eventoDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteEvento(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const eventoPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putEvento(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    eventoDelete,
    eventoPost,
    eventoPut,
    eventoGet
}