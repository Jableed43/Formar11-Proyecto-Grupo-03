'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subcategory.belongsTo(models.Category,{
        as : 'subcategory'
      }),
      Subcategory.hasMany(models.Product,{
        as : 'products',
        foreignKey : 'id_subcategory'
      })
    }
  };
  Subcategory.init({
    name: DataTypes.STRING,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategory',
  });
  return Subcategory;
};