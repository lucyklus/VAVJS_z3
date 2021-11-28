'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      }
    }),
    await queryInterface.bulkInsert('Product', [
      {
        title: "Klavír Yamaha",
        image: "https://www.hudobny-dom.sk/galeria/3_36202/yamaha-clp-665-gp-pe-digitalni-klavir-original.jpg",
        price: 1999.99,
      }, 
      {
        title: "Drevená Flauta JANOD",
        image: "https://www.littlerabbit.sk/wp-content/uploads/2019/11/janod-drevena-flauta-J07630-1.jpg",
        price: 10.99,
      }, 
      {
        title: "Sopránové Ukulele US-50 BL",
        image: "https://www.hudobniny.net/2852-thickbox_default/sopranove-ukulele-us-50-bl-classic-cantabile.jpg",
        price: 26.00,
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};