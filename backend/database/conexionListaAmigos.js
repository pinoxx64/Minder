const { where } = require('sequelize')
const listaAmigo = require('../models/listaAmigos')

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

    static obtenerListaAmigoPorId = async (idlistaAmgos1) => {
        try {
            const listaAmigo = await listaAmigo.findAll({
                where: {
                    idlistaAmgos1 : idlistaAmgos1
                },
                attributes: ['id', 'idlistaAmgos1', 'idlistaAmgos2']
            });
            return listaAmigo;
        } catch (error) {
            throw error;
        }
    }

    static modificarListaAmigo = async (idlistaAmgos1, body) => {
        let resultado = 0
        try {
            const listaAmigo = await listaAmigo.findById({
                where: {
                    idlistaAmgos1 : idlistaAmgos1
                },
                attributes: ['id', 'idlistaAmgos1', 'idlistaAmgos2']
            });
    
            if (!listaAmigo) {
                resultado = 0
            } else {
                await listaAmigo.updateOne(body)
                resultado = 1
            }
    
        } catch (error) {
            resultado = 0
            console.error('Error al modificar listaAmigo:', error)
        }
        return resultado
    }

}

module.exports = conexionListaAmigos
