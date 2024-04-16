'use strict';
const {usuarioEventoFactory} = require('../factories/usuarioEventoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarioEvento = await usuarioEventoFactory(4);
    await queryInterface.bulkInsert('usuarioEventos', usuarioEvento, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarioEventos', null, {});
  }
};