'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subcategories.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      }),
      Subcategories.hasMany(models.Products,{
        as : 'products'
      })
    }
  };
  Subcategories.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategories',
  });
  return Subcategories;
};