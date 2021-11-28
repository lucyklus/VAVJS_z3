'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderProduct', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: { model: {
          tableName: 'Order',
        },
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: {
          tableName: 'Product',
        },
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderProduct');
  }
};