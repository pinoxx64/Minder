'use strict';
const {ninoFactory} = required('../factories/ninoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const nino = await ninoFactory(4);
    await queryInterface.bulkInsert('nino', nino, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('nino', null, {});
  }
};