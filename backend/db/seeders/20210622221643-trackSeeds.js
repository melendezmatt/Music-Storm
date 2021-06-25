'use strict';

const db = require('../models');
const { User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll()

    return queryInterface.bulkInsert('Tracks', [
      {
        userId:users[0].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/sweatpants.mp3',
        title: 'IV. Sweatpants',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/because-the-internet.jpg',
        albumTitle: 'Because The Internet',

      },
      {
        userId:users[0].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/the-worst-guys.mp3',
        title: 'I. The Worst Guys',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/because-the-internet.jpg',
        albumTitle: 'Because The Internet',

      },
      {
        userId:users[1].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/break-up-with-your-girlfriend.mp3',
        title: "break up with your girlfriend, i'm bored",
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/thank-u-next.jpg',
        albumTitle: 'thank u, next',

      },
      {
        userId:users[1].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/nasa.mp3',
        title: 'NASA',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/thank-u-next.jpg',
        albumTitle: 'thank u, next',

      },
      {
        userId:users[2].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/lovesick-girls.mp3',
        title: 'Lovesick Girls',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/the-album.jpg',
        albumTitle: 'The Album',

      },
      {
        userId:users[2].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/pretty-savage.mp3',
        title: 'Pretty Savage',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/the-album.jpg',
        albumTitle: 'The Album',

      },
      {
        userId:users[3].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/dont-start-now.mp3',
        title: "Don't Start Now",
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/future-nostalgia.jpg',
        albumTitle: 'Future Nostalgia',

      },
      {
        userId:users[3].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/physical.mp3',
        title: 'Physical',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/future-nostalgia.jpg',
        albumTitle: 'Future Nostalgia',

      },
      {
        userId:users[4].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/all-night.mp3',
        title: 'All Night',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/coloring-book.jpg',
        albumTitle: 'Coloring Book',

      },
      {
        userId:users[4].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/all-we-got.mp3',
        title: 'All We Got',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/coloring-book.jpg',
        albumTitle: 'Coloring Book',

      },
      {
        userId:users[5].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/deja-vu.mp3',
        title: 'deja vu',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/sour.jpg',
        albumTitle: 'SOUR',

      },
      {
        userId:users[5].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/traitor.mp3',
        title: 'traitor',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/sour.jpg',
        albumTitle: 'SOUR',

      },
      {
        userId:users[6].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/interlude.mp3',
        title: 'i n t e r l u d e',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/the-offseason.jpg',
        albumTitle: 'The Offseason',

      },
      {
        userId:users[6].id,
        url: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/my-life.mp3',
        title: 'm y . l i f e',
        albumImageUrl: 'https://music-storm-bucket.s3.us-west-1.amazonaws.com/the-offseason.jpg',
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
