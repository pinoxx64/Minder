'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuariorol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.usuario, {foreignKey: 'idUsuario'});
      this.belongsTo(models.rol, {foreignKey: 'idRol'});
    }
  }
  usuariorol.init({
    idUsuario: DataTypes.INTEGER,
    idRol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuariorol',
  });
  return usuariorol;
};