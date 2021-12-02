'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Subcategories', [
        {
          name : 'Tacos',
          id_category: 2       
        },
        {
          name : 'Burritos',
          id_category: 2       
        },
        {
          name : 'Quesadillas',
          id_category: 2       
        },
        {
          name : 'Entradas',
          id_category: 2       
        },
        {
          name : 'Platos',
          id_category: 2       
        },
        {
          name : 'Ensaladas',
          id_category: 2       
        },
        {
          name : 'Salsas',
          id_category: 2       
        },
        {
          name : 'Dulces',
          id_category: 2       
        },
        {
          name : 'Gaseosas',
          id_category: 1       
        },
        {
          name : 'Jugos',
          id_category: 1       
        },
        {
          name : 'Aguas',
          id_category: 1       
        },
      ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
