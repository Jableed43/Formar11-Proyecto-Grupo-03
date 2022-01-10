'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Subcategory,{
        as : 'subcategories',
        foreignKey : 'subcategoryId'
      }),
      Product.belongsTo(models.Cart, {
        as: 'cart',
      })
    }
  };
  Product.init({
    title: DataTypes.STRING,
    images: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    calories: DataTypes.DECIMAL,
    totalfat: DataTypes.DECIMAL,
    carb: DataTypes.DECIMAL,
    protein: DataTypes.DECIMAL,
    transfat: DataTypes.DECIMAL,
    saturatedfat: DataTypes.DECIMAL,
    cholesterol: DataTypes.DECIMAL,
    sodium: DataTypes.DECIMAL,
    sugars: DataTypes.DECIMAL,
    fiber: DataTypes.DECIMAL,
    subcategoryId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};