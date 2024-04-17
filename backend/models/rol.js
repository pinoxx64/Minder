'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    static associate(models) {
      this.hasMany(models.rol, {
        foreignKey: 'idRol',
        as: 'usuariorol'
      });
    }
  }
  rol.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol',
  });
  return rol;
};