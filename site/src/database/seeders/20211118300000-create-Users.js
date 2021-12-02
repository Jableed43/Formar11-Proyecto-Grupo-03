'use strict';
const bcrypt = require('bcryptjs');

let usuarios = require('../../data/users.json')

// let usuariosDB = usuarios.map(user => {
//   return {
//     name: user.name,
//     email: user.email,
//     password: user.password,
//     id_sex: if(user.sex == 0){
      
//     },
//     "id_province": 3,
//     "avatar": "default-img.jpg",
//     "id_rol": 1,
//     createdAt: null,
//     updatedAt: null
//   }
// })

let users = [
  {
    "name": "Taco",
    "email": "tacopado@gmail.com",
    "password": bcrypt.hashSync('123123',10),
    "id_sex": 1,
    "id_province": 3,
    "avatar": "default-img.jpg",
    "id_rol": 1,
    createdAt: new Date,
    updatedAt: new Date
    },
  {
    "name": "Mace Cadd",
    "email": "mcadd1@gmail.com",
    "password": bcrypt.hashSync('123123',10),
    "id_sex": 1,
    "id_province": 1,
    "avatar": "Mace.jpeg",
    "id_rol": 2,
    createdAt: new Date,
    updatedAt: new Date
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
