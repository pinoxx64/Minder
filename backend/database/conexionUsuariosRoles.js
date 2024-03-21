require('dotenv').config()
const bcrypt = require('bcrypt');
const {
    Sequelize,
    sequelize,
    Op,
    where
} = require('sequelize');
const models = require('../models/index.js');

class ConexionUsuariosRoles{
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

    usuariosRolesGet = async () => {
        try{
            let resultado = [];
            this.conectar();
            resultado = await models.usuariorol.findAll();
            return resultado;
        }catch(error){
          throw error
        }finally{
            this.desconectar();
        }
    }

    usuariosRolesGetId = async (idUser) => {
        try{
            let resultado = [];
            this.conectar();
            resultado = await models.usuariorol.findAll({
                where: {
                    idUser : idUser
                }
            });
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

    usuariosRolesPost = async (body) => {
        let resultado;
        this.conectar();
        try {
            const rolAsig = new models.usuariorol(body);
            await rolAsig.save();
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    usuariosRolesDelete = async (id) => {
        try{
            this.conectar();
            let resultado = await models.usuariorol.findByPk(id);
            await resultado.destroy();
        }catch(error){
            throw error
        }finally{
            this.desconectar()
        }
        return resultado;
    }
    usuariosRolesPut = async (id,body) => {
        try{
            let resultado = 0
            this.conectar();
            let task = await models.usuariorol.findByPk(id);
            await task.update(body)
            return resultado
        }catch(error){
            throw error
        }finally{
            this.desconectar()
        }
    }
   
}

module.exports = ConexionUsuariosRoles;