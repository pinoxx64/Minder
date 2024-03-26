'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evento extends Model {
    static associate(models) {
      this.hasMany(models.usuarioevento, {
        foreignKey: 'idEvento',
        as: 'usuarioevento',
      });
    }
  }
  evento.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    descrip: DataTypes.STRING,
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'evento',
  });
  return evento;
};