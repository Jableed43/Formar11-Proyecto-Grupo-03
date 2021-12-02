'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Sexes', [
        {
          name : 'Masculino',
          createdAt : new Date,
          updatedAt : new Date          
        },
        {
          name : 'Femenino',
          createdAt : new Date,
          updatedAt : new Date          
        },
        {
          name : 'Prefiero no decirlo',
          createdAt : new Date,
          updatedAt : new Date          
        }    
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Sexes', null, {});
     
  }
};
