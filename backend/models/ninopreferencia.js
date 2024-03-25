'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ninoPreferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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