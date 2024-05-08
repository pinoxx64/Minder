const {response,request} = require('express');
const Conexion = require('../database/ConexionPreferencia')

const preferenciaGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getPreferencia(req.params.id)    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const preferenciaPost =  (req = request, res = response) => {
    const conx = new Conexion();
        
    conx.registrarRol(req.body)    
        .then( msg => {
            console.log('Insertado correctamente!');
            res.status(201).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el registro!');
            res.status(203).json(err);
        });
}

const preferenciaDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarPreferencia(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}

const preferenciaPut =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.modificarPreferencia(req.params.id, req.body)    
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
    preferenciaDelete,
    preferenciaPost,
    preferenciaPut,
    preferenciaGet,
}