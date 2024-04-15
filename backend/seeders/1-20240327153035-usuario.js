'use strict';
const {usuarioFactory} = required('../factories/usuarioFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuario = await usuarioFactory(20);
    await queryInterface.bulkInsert('usuario', usuario, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
