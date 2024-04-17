require('dotenv').config()
const {Sequelize} = require('sequelize');
const models = require('../models/index');

class ConexionChat{
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

    getChat = async (id) => {
        try{
            let resultado = [];
            this.conectar();
            resultado = await models.Chat.findByPk(id);
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

    postChat = async (body) => {
        let resultado;
        this.conectar();
        try {
            const chatNuevo = new models.Chat(body);
            await chatNuevo.save();
            resultado = chatNuevo.id; 
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

    deleteChat = async (id) => {
        try{
            this.conectar();
            let resultado = await models.Chat.findByPk(id);
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
    /*putUsuarios = async (id,body) => {
        let resultado = 0
        this.conectar();
        try{
            const task = await models.user.findByPk(id);
            resultado = await task.update(body)
            return resultado
        }catch(error){
            throw error
        }finally{
            this.desconectar()
        }
    }*/
}

module.exports = ConexionChat;