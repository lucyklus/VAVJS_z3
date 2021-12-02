'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasOne(models.Order, {foreignKey: 'customerId', as: 'customer'})
    }
  };
  Customer.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    city: DataTypes.STRING,
    postcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
    timestamps: false,
    freezeTableName: true
  });
  return Customer;
};