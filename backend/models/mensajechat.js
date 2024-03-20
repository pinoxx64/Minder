'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensajechat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mensajechat.init({
    idchat: DataTypes.INTEGER,
    mensaje: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mensajechat',
  });
  return mensajechat;
};