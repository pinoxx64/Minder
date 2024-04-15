'use strict';
const {usuarioEventoFactory} = required('../factories/usuarioEventoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarioEvento = await usuarioEventoFactory(4);
    await queryInterface.bulkInsert('usuarioEvento', usuarioEvento, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarioEvento', null, {});
  }
};