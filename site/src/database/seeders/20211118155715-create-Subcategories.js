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
          name : 'Agua',
          id_category: 1          
        },
        {
          name : 'Taco',
          id_category: 2        
        },
        {
          name : 'Burrito',
          id_category: 2        
        },
        {
          name : 'Quesadilla',
          id_category: 2        
        },
        {
          name : 'Chips',
          id_category: 2        
        },
        {
          name : 'Papas',
          id_category: 2        
        },
        {
          name : 'Nachos',
          id_category: 2        
        },
        {
          name : 'Chile',
          id_category: 2        
        } ,
        {
          name : 'Ensalada',
          id_category: 2        
        } ,
        {
          name : 'Dulces',
          id_category: 2        
        } 
      ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
