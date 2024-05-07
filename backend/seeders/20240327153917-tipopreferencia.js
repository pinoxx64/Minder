'use strict';
const {tipoPreferenciaFactory} = require('../factories/tipoPreferenciaFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tipoPreferencia = await tipoPreferenciaFactory(20);
    await queryInterface.bulkInsert('tipoPreferencia', tipoPreferencia, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipoPreferencia', null, {});
  }
};