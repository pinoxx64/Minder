'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listaAmigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario1',
        as: 'usuarios'
      });
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario2',
        as: 'usuarios'
      });
    }
  }
  listaAmigos.init({
    idUsuario1: DataTypes.INTEGER,
    idUsuario2: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'listaamigos',
  });
  return listaAmigos;
};