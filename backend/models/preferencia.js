'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class preferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario',
      });
    }
  }
  preferencia.init({
    idUsuario: DataTypes.INTEGER,
    deporte: DataTypes.INTEGER,
    arte: DataTypes.INTEGER,
    politico: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER,
    idInteres: DataTypes.INTEGER,
    idNinos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'preferencia',
  });
  return preferencia;
};