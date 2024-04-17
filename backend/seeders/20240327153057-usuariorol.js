'use strict';
const {usuarioRolFactory} = require('../factories/usuarioRolFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarioRol = await usuarioRolFactory(20);
    await queryInterface.bulkInsert('usuarioRols', usuarioRol, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarioRols', null, {});
  }
};