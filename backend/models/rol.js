'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*this.belongsToMany(models.usuario, {
        through: models.usuariorol,
        foreignKey: 'idRol',
        as: 'usuariorol'});*/
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