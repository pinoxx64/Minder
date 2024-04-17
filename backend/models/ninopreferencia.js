'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ninoPreferencia extends Model {
    static associate(models) {
      this.belongsTo(models.preferencia, {
        foreignKey: 'idPreferencia',
        as: 'preferencia'
      });
      this.belongsTo(models.nino, {
        foreignKey: 'idNino',
        as: 'nino'
      });
    }
  }
  ninoPreferencia.init({
    idPreferencia: DataTypes.INTEGER,
    idNino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ninoPreferencia',
  });
  return ninoPreferencia;
};