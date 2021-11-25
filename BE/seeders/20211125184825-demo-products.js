'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        nazov: "Klavír Yamaha",
        obrazok: "https://www.hudobny-dom.sk/galeria/3_36202/yamaha-clp-665-gp-pe-digitalni-klavir-original.jpg",
        cena: 1999.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        nazov: "Drevená Flauta JANOD",
        obrazok: "https://www.littlerabbit.sk/wp-content/uploads/2019/11/janod-drevena-flauta-J07630-1.jpg",
        cena: 10.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        nazov: "Sopránové Ukulele US-50 BL",
        obrazok: "https://www.hudobniny.net/2852-thickbox_default/sopranove-ukulele-us-50-bl-classic-cantabile.jpg",
        cena: 26.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
