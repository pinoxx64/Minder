require('dotenv').config()
const { Sequelize, Op } = require('sequelize');
const models = require('../models/index.js'); //Esto tiene acceso a todos los modelos.

class ConexionEvento {

    constructor() {
        this.db = new Sequelize(process.env.DB_DEV, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect:process.env.DB_DIALECT, /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
             }
          });
    }

    /**
     * Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, 
     * call sequelize.close() (which is asynchronous and returns a Promise).
     */

    //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

    conectar = () => {
        this.db.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    desconectar = () => {
        //this.db.close();
        process.on('SIGINT', () => conn.close())
    }

    getlistado = async() => {
        let resultado = [];
        this.conectar();
        console.log(`Accediendo a los datos...`)
        resultado = await models.evento.findAll({
            attributes: ['id', 'nombre', 'fecha', 'descrip', 'latitud', 'longitud']
          });
        this.desconectar();
        return resultado;
    }

    getEvento = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await models.Evento.findByPk(id);
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarEvento = async(body) => {
        let resultado = 0;
        this.conectar();
        try{
            // const usuarioNuevo = new Persona(body); //Con esto añade los timeStamps.
            // await usuarioNuevo.save();
            const usuarioNuevo = await models.Evento.create(body);
            resultado = 1; // Asume que la inserción fue exitosa
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

    modificarEvento = async(id, body) => {
        this.conectar();
        let resultado = await models.Evento.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarEvento = async(id) => {
        this.conectar();
        let resultado = await models.Evento.findByPk(id);
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }
}

module.exports = ConexionEvento;