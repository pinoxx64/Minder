'use strict';
const {eventoFactory} = require('../factories/eventoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const evento = await eventoFactory(2);
    await queryInterface.bulkInsert('eventos', evento, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('eventos', null, {});
  }
};