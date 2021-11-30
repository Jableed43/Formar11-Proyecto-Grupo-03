'use strict';
const bcrypt = require('bcryptjs');

let users = [
  {
    "name": "Taco",
    "email": "tacopado@gmail.com",
    "password": bcrypt.hashSync('123123',10),
    "id_sex": 1,
    "id_province": 3,
    "avatar": "default-img.jpg",
    "id_rol": 1,
  },
  {
    "name": "Mace Cadd",
    "email": "mcadd1@gmail.com",
    "password": bcrypt.hashSync('123123',10),
    "id_sex": 1,
    "id_province": 1,
    "avatar": "Mace.jpeg",
    "id_rol": 2,
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
