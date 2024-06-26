'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nino extends Model {
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
  nino.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nino',
  });
  return nino;
};