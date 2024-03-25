'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
const rol = require('./rol');
module.exports = (sequelize, DataTypes) => {
  class usuarioRol extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
      this.belongsTo(models.rol, {
        foreignKey: 'idRol',
        as: 'rol'
      });
    }
  }
  usuarioRol.init({
    idUsuario: {
      type: DataTypes.STRING,
      references: {
        model: usuario,
        key: id
      }
    },
    idRol: {
      type: DataTypes.STRING,
      references: {
        model: rol,
        key: id
      }
    }
  }, {
    sequelize,
    modelName: 'usuarioRol',
  });
  return usuarioRol;
};