const {response,request} = require('express');
const Conexion = require('../database/ConexionMensajechat')

const mensajechatGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getMensajechat(req.params.id)    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const mensajechatPost =  (req = request, res = response) => {
    const conx = new Conexion();
        
    conx.registrarMensajechat(req.body)    
        .then( msg => {
            console.log('Insertado correctamente!');
            res.status(201).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el registro!');
            res.status(203).json(err);
        });
}

const mensajechatDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarMensajechat(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}

const mensajeChatPut =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.modificarMensajechat(req.params.id, req.body)    
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en la modificación!');
            res.status(203).json(err);
        });
}

module.exports = {
    mensajechatDelete,
    mensajechatPost,
    mensajeChatPut,
    mensajechatGet,
}