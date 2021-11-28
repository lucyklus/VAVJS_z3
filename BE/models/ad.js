'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    static associate(models) {
    }
  };
  Ad.init({
    link: DataTypes.STRING,
    image: DataTypes.STRING,
    counter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ad',
    timestamps: false,
    freezeTableName: true
  });
  return Ad;
};