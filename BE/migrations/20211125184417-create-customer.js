'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      meno: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      ulica: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      cislo: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
       }
      },
      mesto: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      psc: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Customers');
  }
};