'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Provinces', [
        {
          name : 'Buenos Aires'        
        },
        {
          name : 'Capital Federal'        
        },
        {
          name : 'Catamarca'        
        },
        {
          name : 'Chaco'        
        },
        {
          name : 'Chubut'        
        },
        {
          name : 'Córdoba'        
        },
        {
          name : 'Corrientes'        
        },
        {
          name : 'Entre Ríos'        
        },
        {
          name : 'Formosa'        
        },
        {
          name : 'Jujuy'        
        },
        {
          name : 'La Pampa'        
        },
        {
          name : 'La Rioja'        
        },
        {
          name : 'Mendoza'        
        },
        {
          name : 'Misiones'        
        },
        {
          name : 'Neuquén'        
        },
        {
          name : 'Río Negro'        
        },
        {
          name : 'Salta'        
        },
        {
          name : 'San Juan'        
        },
        {
          name : 'San Luis'        
        },
        {
          name : 'Santa Cruz'        
        },
        {
          name : 'Santa Fé'        
        },
        {
          name : 'Santiago del Estero'        
        },
        {
          name : 'Tierra del Fuego'        
        },
        {
          name : 'Tucumán'        
        }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Provinces', null, {});
     
  }
};
