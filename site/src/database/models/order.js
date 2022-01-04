'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User,{
        as : 'order',
        foreignKey: 'id_client'
      }),
      Order.hasMany(models.Cart,{
        as : 'carts',
        foreignKey: 'id_order'
      })
    }
  };
  Order.init({
    status: DataTypes.STRING,
    id_client: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};