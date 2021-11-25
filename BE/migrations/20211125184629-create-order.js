'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      zakaznik: {
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      produkty: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      stav: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Orders');
  }
};