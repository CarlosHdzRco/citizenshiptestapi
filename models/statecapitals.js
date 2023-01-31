'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statecapitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  statecapitals.init({
    state: DataTypes.STRING,
    capital: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'statecapitals',
  });
  return statecapitals;
};