'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listaAmigo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.usuario, {
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