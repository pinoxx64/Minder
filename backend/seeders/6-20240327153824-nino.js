'use strict';
const {ninoFactory} = require('../factories/ninoFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const nino = await ninoFactory(4);
    await queryInterface.bulkInsert('ninos', nino, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ninos', null, {});
  }
};