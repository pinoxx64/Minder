const {response,request} = require('express');
const Conexion = require('../database/conexionListaAmigos')

const listaAmigosGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getListaAmigos(req.params.id)    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const listaAmigosPost =  async(req = request, res = response) => {
    const conx = new Conexion();

    conx.registrarListaAmigos(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}

const listaAmigosDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarListaAmigos(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}


module.exports = {
    listaAmigosDelete,
    listaAmigosPost,
    listaAmigosGet
}