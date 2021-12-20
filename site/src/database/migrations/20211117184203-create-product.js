'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      images: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(1234),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,  
        allowNull: false
      },
      calories: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      totalfat: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      carb: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      protein: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      transfat: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      saturatedfat: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      cholesterol: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      sodium: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      sugars: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      fiber: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'Subcategories'
          },
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};