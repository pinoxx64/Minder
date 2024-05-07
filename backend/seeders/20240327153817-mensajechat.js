'use strict';
const {mensajeChatFactory} = require('../factories/mensajeChatFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mensajeChat = await mensajeChatFactory(2);
    await queryInterface.bulkInsert('mensajeChats', mensajeChat, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mensajeChats', null, {});
  }
};