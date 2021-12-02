'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    static associate(models) {
      OrderProduct.belongsTo(models.Product, {foreignKey: 'productId', as:'details'})
      OrderProduct.belongsTo(models.Order, {foreignKey: 'orderId', as: 'products'})
    }
  };
  OrderProduct.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderProduct',
    timestamps: false, 
    freezeTableName: true,
  });
  return OrderProduct;
};