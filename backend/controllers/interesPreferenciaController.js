const {response,request} = require('express');
const Conexion = require('../database/conexionInteresPreferencia');

const interesPreferenciaGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getInteresPreferencia(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const interesPreferenciaPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postInteresPreferencia(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const interesPreferenciaDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteInteresPreferencia(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const interesPreferenciaPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putInteresPreferencia(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    interesPreferenciaDelete,
    interesPreferenciaPost,
    interesPreferenciaPut,
    interesPreferenciaGet
}