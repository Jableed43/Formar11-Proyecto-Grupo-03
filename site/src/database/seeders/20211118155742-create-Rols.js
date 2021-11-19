'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Rols', [
        {
          name : 'Admin'        
        },
        {
          name : 'User'        
        }    
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
