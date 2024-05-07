'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiporelacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.tiporelacion, {
        foreignKey: 'idTipo',
        as: 'tiporelacion',
      });
    }
  }
  tiporelacion.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tiporelacion',
  });
  return tiporelacion;
};