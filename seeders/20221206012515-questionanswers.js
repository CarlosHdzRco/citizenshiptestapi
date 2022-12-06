'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questionanswers', [
      {
        question: 'What is the supreme law of the land?',
        answer: ['the Constitution'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What does the Constitution do?',
        answer: ['Sets up the government', 'defines the government', 'protects basic rights of Americans'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questionanswers', null, {});
  }
};
