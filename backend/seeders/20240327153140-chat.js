'use strict';
const {chatFactory} = required('../factories/chatFactory')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const chat = await chatFactory(2);
    await queryInterface.bulkInsert('chat', chat, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chat', null, {});
  }
};
