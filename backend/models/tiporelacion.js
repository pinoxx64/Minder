'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoRelacion extends Model {
    static associate(models) {
      this.hasMany(models.tiporelacion, {
        foreignKey: 'idTipo',
        as: 'tiporelacion',
      });
    }
  }
  tipoRelacion.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipoRelacion',
  });
  return tipoRelacion;
};