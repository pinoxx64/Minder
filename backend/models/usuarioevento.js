'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioEvento extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
      this.belongsTo(models.evento, {
        foreignKey: 'idEvento',
        as: 'evento',
      });
    }
  }
  usuarioEvento.init({
    idEvento: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarioEvento',
  });
  return usuarioEvento;
};