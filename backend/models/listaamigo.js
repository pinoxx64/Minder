'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listaAmigo extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  listaAmigo.init({
    idUsuario1: DataTypes.INTEGER,
    idUsuario2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'listaAmigo',
  });
  return listaAmigo;
};