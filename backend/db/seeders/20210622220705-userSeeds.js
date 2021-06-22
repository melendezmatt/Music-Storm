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
        bio: 'Hello! My name is Childish Gambino! This is my bio.',
        artistName: 'Childish Gambino'
      },
      {
        email: 'arianagrande@gmail.com',
        username: 'arianagrande',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl: 'profile-images/ariana-grande.jpg',
        bio: 'Hello! My name is Ariana Grande! This is my bio.',
        artistName: 'Ariana Grande'
      },
      {
        email: 'blackpink@gmail.com',
        username: 'blackpink',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/blackpink.jpg',
        bio: 'Hello! We are BLACKPINK! This is our bio.',
        artistName: 'BLACKPINK'
      },
      {
        email: 'dualipa@gmail.com',
        username: 'dualipa',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/dua-lipa.jpg',
        bio: 'Hello! My name is Dua Lipa! This is my bio.',
        artistName: 'Dua Lipa'
      },
      {
        email: 'chancetherapper@gmail.com',
        username: 'chancetherapper',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/chance-the-rapper.jpg',
        bio: 'Hello! My name is Chance The Rapper! This is my bio.',
        artistName: 'Chance The Rapper'
      },
      {
        email: 'oliviarodrigo@gmail.com',
        username: 'oliviarodrigo',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/olivia-rodrigo.jpg',
        bio: 'Hello! My name is Olivia Rodrigo! This is my bio.',
        artistName: 'Olivia Rodrigo'
      },
      {
        email: 'jcole@gmail.com',
        username: 'jcole',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'profile-images/jcole.jpg',
        bio: 'Hello! My name is J Cole! This is my bio.',
        artistName: 'J Cole'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
