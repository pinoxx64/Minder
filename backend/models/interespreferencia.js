'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interesPreferencia extends Model {
    static associate(models) {
      this.belongsTo(models.preferencia, {
        foreignKey: 'idPreferencia',
        as: 'preferencia'
      });
      this.belongsTo(models.interes, {
        foreignKey: 'idInteres',
        as: 'interes'
      });
    }
  }
  interesPreferencia.init({
    idPreferencia: DataTypes.INTEGER,
    idInteres: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'interesPreferencia',
  });
  return interesPreferencia;
};