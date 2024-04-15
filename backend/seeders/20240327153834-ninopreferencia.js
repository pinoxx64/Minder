'use strict';
const {ninoPreferenciaFactory} = required('../factories/ninoPreferenciaFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const ninoPreferencia = await ninoPreferenciaFactory(20);
    await queryInterface.bulkInsert('ninoPreferencia', ninoPreferencia, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ninoPreferencia', null, {});
  }
};