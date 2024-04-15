'use strict';
const {preferenciaFactory} = required('../factories/preferenciaFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const preferencia = await preferenciaFactory(4);
    await queryInterface.bulkInsert('preferencia', preferencia, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preferencia', null, {});
  }
};
