'use strict';
const {interesPreferenciaFactory} = require('../factories/interesPreferenciaFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const interesPreferencia = await interesPreferenciaFactory(20);
    await queryInterface.bulkInsert('interesPreferencia', interesPreferencia, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('interesPreferencia', null, {});
  }
};