'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Categories', [
        {
          name : 'Bebida',
          createdAt:new Date,
          updatedAt: new Date
        },
        {
          name : 'Comida',
          createdAt:new Date,
          updatedAt: new Date        
        }    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
