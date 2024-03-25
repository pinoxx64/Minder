'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensajechat extends Model {
    static associate(models) {
      this.hasMany(models.chat, {
        foreignKey: 'idChat',
        as: 'chat',
      });
      this.hasMany(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  mensajechat.init({
    idchat: DataTypes.INTEGER,
    mensaje: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mensajechat',
  });
  return mensajechat;
};