'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Rol,{
        as : 'rol'  
      }),
      User.belongsTo(models.Sex,{
        as : 'province'  
      }),
      User.belongsTo(models.Province,{
        as : 'sex'  
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    p1: DataTypes.STRING,
    sexo: DataTypes.INTEGER,
    provincia: DataTypes.INTEGER,
    rol: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};