'use strict';

const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'childishgambino@gmail.com',
        username: 'childishgambino',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl: 'profile-images/childish-gambino.jpg',
        bio: 'Hello! My name is Childish Gambino! This is my bio.'
      },
      {
        email: 'arianagrande@gmail.com',
        username: 'arianagrande',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl: 'profile-images/ariana-grande.jpg',
        bio: 'Hello! My name is Ariana Grande! This is my bio.'
      },
      {
        email: 'blackpink@gmail.com',
        username: 'blackpink',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/blackpink.jpg',
        bio: 'Hello! We are BLACKPINK! This is our bio.'
      },
      {
        email: 'dualipa@gmail.com',
        username: 'dualipa',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/dua-lipa.jpg',
        bio: 'Hello! My name is Dua Lipa! This is my bio.'
      },
      {
        email: 'chancetherapper@gmail.com',
        username: 'chancetherapper',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/chance-the-rapper.jpg',
        bio: 'Hello! My name is Chance The Rapper! This is my bio.'
      },
      {
        email: 'oliviarodrigo@gmail.com',
        username: 'oliviarodrigo',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/ariana-grande.jpg',
        bio: 'Hello! My name is Olivia Rodrigo! This is my bio.'
      },
      {
        email: 'jcole@gmail.com',
        username: 'jcole',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/ariana-grande.jpg',
        bio: 'Hello! My name is J Cole! This is my bio.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
