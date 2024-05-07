'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipopreferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tipopreferencia.init({
    idPreferencia: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tipopreferencia',
  });
  return tipopreferencia;
};