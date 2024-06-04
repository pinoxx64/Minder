'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*this.hasMany(models.usuarioevento, {
        foreignKey: 'idEvento',
        as: 'usuarioevento',
      });*/
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
    tableName: 'eventos'
  });
  return evento;
};