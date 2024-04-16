'use strict';
const {tipoRelacionFactory} = require('../factories/tipoRelacionFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tipoRelacion = await tipoRelacionFactory(2);
    await queryInterface.bulkInsert('tipoRelacions', tipoRelacion, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipoRelacions', null, {});
  }
};