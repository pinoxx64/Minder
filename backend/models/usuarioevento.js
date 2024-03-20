'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioEvento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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