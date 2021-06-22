'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tracks', 'albumTitle', {
      type: Sequelize.STRING(80),
      allowNull: false,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tracks', 'albumTitle')
  }
};
