const { where } = require('sequelize')
const listaAmigo = require('../models/listaamigos')

class conexionListaAmigos {
    static obtenerListaAmigos = async () => {
        let resultado = []
        try {
            resultado = await listaAmigo.find()
        } catch (error) {
            throw error

        }
        return resultado
    }

    registrarListaAmigos = async(body) => {
        let resultado = 0;
        this.conectar();
        try{
            const listaAmigosNuevo = await models.listaAmigos.create(body);
            resultado = "listaAmigos creado correctamente";
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                console.log(`El id ${body.id} ya existe en la base de datos.`);
            } else {
                console.log('Ocurrió un error desconocido: ', error);
            }
            throw error; 
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    static obtenerListaAmigoPorIdUsuario1 = async (idUsuario1) => {
        try {
            const listaAmigo = await listaAmigo.findAll({
                where: {
                    idUsuario1 : idUsuario1
                },
                attributes: ['id', 'idUsuario1', 'idUsuario2']
            });
            return listaAmigo;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = conexionListaAmigos
