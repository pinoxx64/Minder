'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuariorol',
      });
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
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