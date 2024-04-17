'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      this.hasMany(models.usuarioevento, {
        foreignKey: 'idEvento',
        as: 'usuarioevento',
      });
    }
  }
  Evento.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    descrip: DataTypes.STRING,
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};