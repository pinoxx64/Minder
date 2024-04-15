'use strict';
const {eventoFactory} = required('../factories/eventoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const evento = await eventoFactory(2);
    await queryInterface.bulkInsert('evento', evento, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('evento', null, {});
  }
};