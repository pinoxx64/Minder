const {response,request} = require('express');
const Conexion = require('../database/conexionUsuario')

const usuariosGet =  (req, res = response) => {
    const conx = new Conexion();

    conx.getlistado()    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registros');
            res.status(203).json({'msg':'No se han encontrado registros'});
        });
}

const usuarioGet =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.getUsuario(req.params.id)    
        .then( msg => {
            console.log('Listado correcto!');
            res.status(200).json(msg);
        })
        .catch( err => {
            console.log('No hay registro!');
            res.status(203).json({'msg':'No se ha encontrado el registro'});
        });
}

const usuariosPost =  async(req = request, res = response) => {
    const conx = new Conexion();

    try {
        // Hashear la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(req.body.Clave, 10); // 10 es el costo de la función de hash
        
        // Modificar el cuerpo de la solicitud para incluir la contraseña hasheada
        const usuarioData = {
            ...req.body,
            Clave: hashedPassword
        };

        // Guardar el usuario
        const msg = await conx.registrarUsuario(usuarioData);
        
        console.log('Insertado correctamente!');
        res.status(201).json(msg);
    } catch (err) {
        console.log('Fallo en el registro!');
        res.status(203).json(err);
    }
}

const usuariosDelete =  (req, res = response) => {
    const conx = new Conexion();
    
    conx.borrarUsuario(req.params.id)    
        .then( msg => {
            console.log('Borrado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el borrado!');
            res.status(203).json(err);
        });
}

const usuariosPut =  async(req, res = response) => {
    const conx = new Conexion();
    
    conx.modificarUsuario(req.params.id, req.body)    
        .then( msg => {
            console.log('Modificado correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en la modificación!');
            res.status(203).json(err);
        });
}

const getRolesUsuario = (req, res = response) => {
    const conx = new Conexion();
    
    conx.getRolesUsuario(req.params.id)    
        .then( msg => {
            console.log('Roles listados correctamente!');
            res.status(202).json(msg);
        })
        .catch( err => {
            console.log('Fallo en el listado de roles!');
            res.status(203).json(err);
        });
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuarioGet,
    getRolesUsuario
}