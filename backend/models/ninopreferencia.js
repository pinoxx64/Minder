'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ninopreferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ninopreferencia.init({
    idPreferencia: DataTypes.INTEGER,
    idNino: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ninopreferencia',
  });
  return ninopreferencia;
};