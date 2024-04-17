'use strict';
const {usuarioFactory} = require('../factories/usuarioFactory.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuario = await usuarioFactory(20);
    await queryInterface.bulkInsert('usuarios', usuario, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
