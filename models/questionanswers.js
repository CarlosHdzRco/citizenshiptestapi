'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questionanswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  questionanswers.init({
    question: DataTypes.STRING,
    answer: DataTypes.ARRAY(DataTypes.STRING),
    category: DataTypes.STRING,
    subcategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'questionanswers',
  });
  return questionanswers;
};