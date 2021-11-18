'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Subcategories', [
        {
          name : 'Jugo',
          id_category: 1       
        },
        {
          name : 'Gaseosa',
          id_category: 1          
        },
        {
          name : 'Taco',
          id_category: 2        
        },
        {
          name : 'Burrito',
          id_category: 2        
        }    
      ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
