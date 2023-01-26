'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questionanswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      type: {
        type: Sequelize.INTEGER
      },
      wrongAns: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      spanishQuestion: {
        type: Sequelize.STRING
      },
      spanishAnswer: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      spanishWrongAns: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      category: {
        type: Sequelize.STRING
      },
      subcategory: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questionanswers');
  }
};