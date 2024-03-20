'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    idEstado: DataTypes.INTEGER,
    fechaNacimiento: DataTypes.DATE,
    contrasena: DataTypes.STRING,
    genero: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};