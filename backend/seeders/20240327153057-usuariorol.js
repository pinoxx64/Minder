'use strict';
const {usuarioRolFactory} = required('../factories/usuarioRolFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarioRol = await usuarioRolFactory(20);
    await queryInterface.bulkInsert('usuarioRol', usuarioRol, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarioRol', null, {});
  }
};