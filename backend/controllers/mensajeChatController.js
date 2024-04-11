const {response,request} = require('express');
const Conexion = require('../database/conexionMensajeChat');

const mensajeChatGet =  (req, res = response) => {
    const conx = new Conexion();
    conx.getMensajeChat(req.params.id)    
        .then( msg => {

            res.status(200).json(msg);
        })
        .catch( err => {
           
            res.status(200).json({'msg':'No se ha encontrado el registro'});
        });
}

const mensajeChatPost =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postMensajeChat(req.body)    
        .then( msg => {
         
            res.status(201).json(msg);
        })
        .catch( err => {
           
            res.status(203).json(err);
        });
}

const mensajeChatDelete =  (req, res) => {
    const conx = new Conexion();
    conx.deleteMensajeChat(req.params.id)    
        .then( msg => {
           
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}

const mensajeChatPut =  (req, res = response) => {
    const conx = new Conexion();
    conx.putMensajeChat(req.params.id, req.body)    
        .then( msg => {
 
            res.status(202).json(msg);
        })
        .catch( err => {
        
            res.status(203).json(err);
        });
}


module.exports = {
    mensajeChatDelete,
    mensajeChatPost,
    mensajeChatPut,
    mensajeChatGet
}