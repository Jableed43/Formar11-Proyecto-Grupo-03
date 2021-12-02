'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Provinces', [
        {
          name : 'Buenos Aires',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Capital Federal',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Catamarca',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Chaco',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Chubut',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Córdoba' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Corrientes',
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Entre Ríos' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Formosa' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Jujuy'  ,
          createdAt:new Date,
          updatedAt: new Date      
        },
        {
          name : 'La Pampa',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'La Rioja',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Mendoza'  ,
          createdAt:new Date,
          updatedAt: new Date      
        },
        {
          name : 'Misiones' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Neuquén' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Río Negro' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Salta' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'San Juan' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'San Luis' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Santa Cruz',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Santa Fé' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Santiago del Estero' ,
          createdAt:new Date,
          updatedAt: new Date       
        },
        {
          name : 'Tierra del Fuego',
          createdAt:new Date,
          updatedAt: new Date        
        },
        {
          name : 'Tucumán' ,
          createdAt:new Date,
          updatedAt: new Date       
        }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Provinces', null, {});
     
  }
};
