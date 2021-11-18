'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Categories', [
        {
          name : 'Comida'        
        },
        {
          name : 'Bebida'        
        }    
    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
