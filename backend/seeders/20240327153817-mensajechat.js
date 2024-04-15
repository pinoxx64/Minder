'use strict';
const {mensajeChatFactory} = required('../factories/mensajeChatFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mensajeChat = await mensajeChatFactory(2);
    await queryInterface.bulkInsert('mensajeChat', mensajeChat, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mensajeChat', null, {});
  }
};