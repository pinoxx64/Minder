'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  Chat.init({
    idUsuario1: DataTypes.INTEGER,
    idUsuario2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chat',
    tableName: 'chats'
  });
  return Chat;
};