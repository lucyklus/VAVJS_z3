'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ad.init({
    link: DataTypes.STRING,
    obrazok: DataTypes.STRING,
    pocitadlo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ad',
  });
  return Ad;
};