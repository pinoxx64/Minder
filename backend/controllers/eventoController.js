const {response,request} = require('express');
const Conexion = require('../database/ConexionEvento')

const eventoGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getEvento(req.params.id)    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const eventoPost =  (req = request, res = response) => {
    const conx = new Conexion();
        
    conx.registrarEvento(req.body)    
        .then( msg => {
            console.log('Insertado correctamente!');
            res.status(201).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el registro!');
            res.status(203).json(err);
        });
}

const eventoDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarEvento(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}

const eventoPut =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.modificarEvento(req.params.id, req.body)    
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
    eventoDelete,
    eventoPost,
    eventoPut,
    eventoGet,
}