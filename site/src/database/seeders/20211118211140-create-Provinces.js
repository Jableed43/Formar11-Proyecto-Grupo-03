'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Provinces', [
        {
          name : 'Buenos Aires'        
        },
        {
          name : 'Catamarca'        
        },
        {
          name : 'Ciudad Autonoma de Buenos Aires'        
        }  
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Provinces', null, {});
     
  }
};
