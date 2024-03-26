'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nino extends Model {
    static associate(models) {
      this.hasMany(models.nino, {
        foreignKey: 'idNino',
        as: 'nino',
      });
    }
  }
  nino.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nino',
  });
  return nino;
};