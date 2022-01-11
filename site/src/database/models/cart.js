'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Cart.belongsTo(models.Order,{
        as : 'order',
        foreignKey : 'id_order'
      }),
      Cart.belongsTo(models.Product,{
        as : 'product',
        foreignKey : 'id_products'
      })
    }
  };
  Cart.init({
    id_users: DataTypes.INTEGER,
    id_products: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};


