'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoPreferencia extends Model {
    static associate(models) {
      this.belongsTo(models.preferencia, {
        foreignKey: 'idPreferencia',
        as: 'preferencia'
      });
      this.belongsTo(models.tiporelacion, {
        foreignKey: 'idTipo',
        as: 'tiporelacion'
      });
    }
  }
  tipoPreferencia.init({
    idPreferencia: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tipoPreferencia',
  });
  return tipoPreferencia;
};