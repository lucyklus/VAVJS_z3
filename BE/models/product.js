'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.OrderProduct, {foreignKey: 'productId', as:'details'})
    }
  };
  Product.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false, 
    freezeTableName: true,
  });
  return Product;
};