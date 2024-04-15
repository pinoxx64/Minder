'use strict';
const {rolFactory} = required('../factories/rolFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rol = await rolFactory(2);
    await queryInterface.bulkInsert('rol', rol, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rol', null, {});
  }
};