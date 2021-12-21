'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Subcategories', [
      {
        name: 'Tacos',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Burritos',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Quesadillas',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Entradas',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Platos',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Ensaladas',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Salsas',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Dulces',
        categoryId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Gaseosas',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Jugos',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Aguas',
        categoryId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Subcategories', null, {});

  }
};
