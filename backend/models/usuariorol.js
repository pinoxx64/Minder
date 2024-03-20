'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarioRol.init({
    idUsuario: DataTypes.STRING,
    idRol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarioRol',
  });
  return usuarioRol;
};