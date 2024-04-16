'use strict';
const {chatFactory} = require('../factories/chatFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const chat = await chatFactory(2);
    await queryInterface.bulkInsert('chats', chat, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chats', null, {});
  }
};
