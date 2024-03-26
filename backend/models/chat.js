'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  chat.init({
    idUsuario1: DataTypes.INTEGER,
    idUsuario2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chat',
  });
  return chat;
};