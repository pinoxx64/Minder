'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('preferencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      deporte: {
        type: Sequelize.INTEGER
      },
      arte: {
        type: Sequelize.INTEGER
      },
      politico: {
        type: Sequelize.INTEGER
      },
      idTipo: {
        type: Sequelize.INTEGER
      },
      idInteres: {
        type: Sequelize.INTEGER
      },
      idNinos: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('preferencia');
  }
};