'use strict';
const {rolFactory} = require('../factories/rolFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rol = await rolFactory(2);
    await queryInterface.bulkInsert('rols', rol, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rols', null, {});
  }
};