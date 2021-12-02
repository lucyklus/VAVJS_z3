'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Customer, {foreignKey: 'customerId', as: 'customer'})
      Order.hasMany(models.OrderProduct, {foreignKey: 'orderId', as: 'products'})
    }
  };
  Order.init({
    customerId: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false,
    freezeTableName: true
  });
  return Order;
};