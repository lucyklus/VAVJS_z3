'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ad', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      counter: {
        type: Sequelize.INTEGER
      }
    });
    await queryInterface.bulkInsert('Ad', [
      {
        link: "https://is.stuba.sk/",
        image: "https://www.fiit.stuba.sk/buxus/images/cache/stu.top_aktualita/aktuality/2020/aktualita2019.png",
        counter: 0,
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ad');
  }
};