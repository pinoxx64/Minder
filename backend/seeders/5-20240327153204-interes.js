'use strict';
const {interesFactory} = require('../factories/interesFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const interes = await interesFactory(2);
    await queryInterface.bulkInsert('interes', interes, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('interes', null, {});
  }
};
