require('dotenv').config()
const { Sequelize, Op } = require('sequelize');
const models = require('../models/index.js'); //Esto tiene acceso a todos los modelos.

class ConexionUsuario {

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
        resultado = await models.usuario.findAll({
            attributes: ['id', 'nombre', 'correo', 'fechaNacimiento', 'contrasena', 'genero', 'foto']
          });
        this.desconectar();
        return resultado;
    }

    getUsuarioAleInte = async() => {
        let resultado = [];
        this.conectar();
        console.log(`Accediendo a los datos...`)
        resultado = await models.usuario.findAll({
            attributes: ['id', 'nombre', 'correo', 'fechaNacimiento', 'contrasena', 'genero', 'foto']
          });
        this.desconectar();
        return resultado;
    }

    getUsuario = async(id) => {
        let resultado = [];
        this.conectar();
        resultado = await models.usuario.findByPk(id, {
            attributes: ['id', 'nombre', 'correo', 'fechaNacimiento', 'contrasena', 'genero', 'foto']
        });
        this.desconectar();
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    registrarUsuario = async(body) => {
        let resultado = 0;
        this.conectar();
        try{
            // const usuarioNuevo = new Persona(body); //Con esto añade los timeStamps.
            // await usuarioNuevo.save();
            const usuarioNuevo = await models.usuario.create(body);
            resultado = "Usuario creado correctamente";
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

    modificarUsuario = async(id, body) => {
        this.conectar();
        let resultado = await models.usuario.findByPk(id, {
            attributes: ['id', 'nombre', 'correo', 'fechaNacimiento', 'contrasena', 'genero', 'foto']
        });
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

    borrarUsuario = async(id) => {
        this.conectar();
        let resultado = await models.usuario.findByPk(id, {
            attributes: ['id', 'nombre', 'correo', 'fechaNacimiento', 'contrasena', 'genero', 'foto']
        });
        if (!resultado){
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

    getRolesUsuario = async(idUsuario) => {
        console.log(idUsuario);
        const userWithRoles = await models.usuario.findByPk(idUsuario, {
            include: [{
                model: models.Rol,
                as: 'roles',
                through: models.RolAsignado
            }]
            });
            
        console.log(userWithRoles)
        const roles = userWithRoles.roles; 
        roles.forEach(role => {
            console.log(role.desc);
        });
        console.log(roles);
        return roles;
    }

    checkLogin = async (correo) => {

        this.conectar();
        let user = await models.user.findOne(({
            where: {
                correo
            }
        }));

        this.desconectar();
        if (!user) {
            throw new Error('Email no registrado');
        }

        return user;
    }

    getRolUserId = async (idUsuario) => {
        try {

            let resultado = [];
            this.conectar();
            resultado = await models.user.findOne({
                attributes: ['id','nombre','correo','createdAt','updatedAt'],
                where: {
                    id: {
                        [Op.eq]: idUsuario
                    }
                },
                include: [{
                    model: models.usuariorol,
                    as: 'usuariorol',
                    include: [{
                            model: models.rol,
                            as: 'rol',
                            attributes: ['nombre'],
                        },

                    ],
                    attributes: ['id'],
                }, ],
            });
            this.desconectar();
            return resultado;
        } catch (err) {
            this.desconectar()
        }
    }
}

module.exports = ConexionUsuario;
