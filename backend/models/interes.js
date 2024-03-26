'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interes extends Model {
    static associate(models) {
      this.hasMany(models.usuario, {
        foreignKey: 'id',
        as: 'interes',
      });
    }
  }
  interes.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'interes',
  });
  return interes;
};