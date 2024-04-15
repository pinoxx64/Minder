'use strict';
const {tipoRelacionFactory} = required('../factories/tipoRelacionFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tipoRelacion = await tipoRelacionFactory(2);
    await queryInterface.bulkInsert('tipoRelacion', tipoRelacion, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipoRelacion', null, {});
  }
};