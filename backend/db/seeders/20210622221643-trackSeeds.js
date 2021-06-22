'use strict';

const db = require('../models');
const { User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert('Tracks', [
      {
        userId:users[0].id,
        url: '../../tracks/sweatpants.mp3',
        title: 'IV. Sweatpants',
        albumImageUrl: 'album-images/because-the-internet.jpg',
        albumTitle: 'Because The Internet',

      },
      {
        userId:users[0].id,
        url: '../../tracks/the-worst-guys.mp3',
        title: 'I. The Worst Guys',
        albumImageUrl: 'album-images/because-the-internet.jpg',
        albumTitle: 'Because The Internet',

      },
      {
        userId:users[1].id,
        url: '../../tracks/break-up-with-your-girlfriend.mp3',
        title: "break up with your girlfriend, i'm bored",
        albumImageUrl: 'album-images/thank-u-next.jpg',
        albumTitle: 'thank u, next',

      },
      {
        userId:users[1].id,
        url: '../../tracks/nasa.mp3',
        title: 'NASA',
        albumImageUrl: 'album-images/thank-u-next.jpg',
        albumTitle: 'thank u, next',

      },
      {
        userId:users[2].id,
        url: '../../tracks/lovesick-girls.mp3',
        title: 'Lovesick Girls',
        albumImageUrl: 'album-images/the-album.jpg',
        albumTitle: 'The Album',

      },
      {
        userId:users[2].id,
        url: '../../tracks/pretty-savage.mp3',
        title: 'Pretty Savage',
        albumImageUrl: 'album-images/the-album.jpg',
        albumTitle: 'The Album',

      },
      {
        userId:users[3].id,
        url: '../../tracks/dont-start-now.mp3',
        title: "Don't Start Now",
        albumImageUrl: 'album-images/future-nostalgia.jpg',
        albumTitle: 'Future Nostalgia',

      },
      {
        userId:users[3].id,
        url: '../../tracks/physical.mp3',
        title: 'Physical',
        albumImageUrl: 'album-images/future-nostalgia.jpg',
        albumTitle: 'Future Nostalgia',

      },
      {
        userId:users[4].id,
        url: '../../tracks/all-night.mp3',
        title: 'All Night',
        albumImageUrl: 'album-images/coloring-book.jpg',
        albumTitle: 'Coloring Book',

      },
      {
        userId:users[4].id,
        url: '../../tracks/all-we-got.mp3',
        title: 'All We Got',
        albumImageUrl: 'album-images/coloring-book.jpg',
        albumTitle: 'Coloring Book',

      },
      {
        userId:users[5].id,
        url: '../../tracks/deja-vu.mp3',
        title: 'deja vu',
        albumImageUrl: 'album-images/sour.jpg',
        albumTitle: 'SOUR',

      },
      {
        userId:users[5].id,
        url: '../../tracks/traitor.mp3',
        title: 'traitor',
        albumImageUrl: 'album-images/sour.jpg',
        albumTitle: 'SOUR',

      },
      {
        userId:users[6].id,
        url: '../../tracks/interlude.mp3',
        title: 'i n t e r l u d e',
        albumImageUrl: 'album-images/the-offseason.jpg',
        albumTitle: 'The Offseason',

      },
      {
        userId:users[6].id,
        url: '../../tracks/my-life.mp3',
        title: 'm y . l i f e',
        albumImageUrl: 'album-images/the-offseason.jpg',
        albumTitle: 'The Offseason',

      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
