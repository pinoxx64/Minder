'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interesPreferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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