'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class preferencia extends Model {
    static associate(models) {
      this.hasMany(models.preferencia, {
        foreignKey: 'idPreferencia',
        as: 'preferencia',
      });
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  preferencia.init({
    idUsuario: DataTypes.INTEGER,
    deporte: DataTypes.INTEGER,
    arte: DataTypes.INTEGER,
    politico: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'preferencia',
  });
  return preferencia;
};