'use strict';

const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'childishgambino@gmail.com',
        username: 'childishgambino',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/childish-gambino.jpg',
        bio: 'Hello! My name is Childish Gambino! This is my bio.',
        artistName: 'Childish Gambino',
        govName: 'Donald Glover',
        location: 'New York City, New York, USA',
        headerImageUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80'
      },
      {
        email: 'arianagrande@gmail.com',
        username: 'arianagrande',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/ariana-grande.jpg',
        bio: 'Hello! My name is Ariana Grande! This is my bio.',
        artistName: 'Ariana Grande',
        govName: 'Ariana Grande-Butera',
        location: 'Los Angeles, California, USA',
        headerImageUrl: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'

      },
      {
        email: 'blackpink@gmail.com',
        username: 'blackpink',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'https://music-storm-bucket.s3.us-west-1.amazonaws.com/blackpink.jpg',
        bio: 'Hello! We are BLACKPINK! This is our bio.',
        artistName: 'BLACKPINK',
        govName: 'Jennie Kim, Lisa Manoban, Roseanne Park, Jisoo Kim',
        location: 'Seoul, South Korea',
        headerImageUrl: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
      },
      {
        email: 'dualipa@gmail.com',
        username: 'dualipa',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'https://music-storm-bucket.s3.us-west-1.amazonaws.com/dua-lipa.jpg',
        bio: 'Hello! My name is Dua Lipa! This is my bio.',
        artistName: 'Dua Lipa',
        govName: 'Dua Lipa',
        location: 'London, England',
        headerImageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
      },
      {
        email: 'chancetherapper@gmail.com',
        username: 'chancetherapper',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'https://music-storm-bucket.s3.us-west-1.amazonaws.com/chance-the-rapper.jpg',
        bio: 'Hello! My name is Chance The Rapper! This is my bio.',
        artistName: 'Chance The Rapper',
        govName: 'Chancelor Bennett',
        location: 'Chicago, Illinois, USA',
        headerImageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
      },
      {
        email: 'oliviarodrigo@gmail.com',
        username: 'oliviarodrigo',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'https://music-storm-bucket.s3.us-west-1.amazonaws.com/olivia-rodrigo.jpg',
        bio: 'Hello! My name is Olivia Rodrigo! This is my bio.',
        artistName: 'Olivia Rodrigo',
        govName: 'Olivia Rodrigo',
        location: 'Los Angeles, California, USA',
        headerImageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        email: 'jcole@gmail.com',
        username: 'jcole',
        hashedPassword: bcrypt.hashSync('Password1!'),
        profileImageUrl:'https://music-storm-bucket.s3.us-west-1.amazonaws.com/jcole.jpg',
        bio: 'Hello! My name is J Cole! This is my bio.',
        artistName: 'J Cole',
        govName: 'Jermaine Cole',
        location: 'Charlotte, North Carolina, USA',
        headerImageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
