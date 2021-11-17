'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sex.hasMany(models.User,{
        as : 'users'
      })
    }
  };
  Sex.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sex',
  });
  return Sex;
};