require('dotenv').config()
const bcrypt = require('bcrypt');
const {
    Sequelize,
    sequelize,
    Op,
    where
} = require('sequelize');
const models = require('../models/index.js');

class ConexionInteres{
    constructor() {
        this.db = new Sequelize(process.env.DB_DEV, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        });
    }

    conectar = () => {
        this.db.authenticate().then(() => {
       
        }).catch((error) => {
            
        });
    }
    desconectar = () => {
        process.on('SIGINT', () => conn.close())
    }

    getInteres = async (id) => {
        try{
            let resultado = [];
            this.conectar();
            resultado = await models.interes.findByPk(id);
            if (!resultado) {
                throw new Error('error');
            }
            return resultado;
        }catch(error){
            throw error
        }
        finally{
            this.desconectar()
        }
    }

    postInteres = async (body) => {
        let resultado;
        this.conectar();
        try {
            const interesNuevo = new models.interes(body);
            await interesNuevo.save();
            resultado = interesNuevo.id; 
            return resultado
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
            } else {
            }
            throw error;
        } finally {
            this.desconectar();
        }

     
    }

    deleteInteres = async (id) => {
        try{
            this.conectar();
            let resultado = await models.interes.findByPk(id);
            if (!resultado) {
                throw error;
            }
            await resultado.destroy();
            return resultado;
        }catch(error){
            throw error
        }finally{
            this.desconectar()
        }
    }
    putInteres = async (id,body) => {
        let resultado = 0
        this.conectar();
        try{
            const task = await models.interes.findByPk(id);
            resultado = await task.update(body)
            return resultado
        }catch(error){
            throw error
        }finally{
            this.desconectar()
        }
    }
}

module.exports = ConexionInteres;