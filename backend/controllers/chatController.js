const {response,request} = require('express');
const Conexion = require('../database/conexionChat');

const chatGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getChat(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const chatPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postChat(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const chatDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteChat(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const chatPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putChat(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    chatDelete,
    chatPost,
    chatPut,
    chatGet
}