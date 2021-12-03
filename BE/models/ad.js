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
    link: {
      type: DataTypes.STRING,
      validate: {
        isURL: {
          msg: 'Link must be an URL with https protocol.',
          protocols: ['https'],
          require_protocol: true
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isURL: {
          msg: 'Image must be an URL with https protocol.',
          protocols: ['https'],
          require_protocol: true
        }
      }
    },
    counter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ad',
    timestamps: false,
    freezeTableName: true
  });
  return Ad;
};