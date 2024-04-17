'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interes extends Model {
    static associate(models) {
      this.hasMany(models.usuario, {
        foreignKey: 'id',
        as: 'Interes',
      });
    }
  }
  Interes.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interes',
  });
  return Interes;
};