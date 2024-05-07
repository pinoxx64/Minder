'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarioevento extends Model {
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
      this.belongsTo(models.evento, {
        foreignKey: 'idEvento',
        as: 'evento',
      });
    }
  }
  usuarioevento.init({
    idUsuario: DataTypes.INTEGER,
    idEveto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarioevento',
  });
  return usuarioevento;
};