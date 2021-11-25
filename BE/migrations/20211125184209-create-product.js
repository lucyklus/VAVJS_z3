'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nazov: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      obrazok: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          isUrl: true
        }
      },
      cena: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};