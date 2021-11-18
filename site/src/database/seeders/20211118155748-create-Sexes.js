'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Sexes', [
        {
          name : 'Masculino'        
        },
        {
          name : 'Femenino'        
        },
        {
          name : 'Prefiero no decirlo'        
        }    
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Sexes', null, {});
     
  }
};
