'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tracks', 'albumImageUrl', {
      type: Sequelize.STRING(255),
      allowNull: false,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tracks', 'albumImageUrl')
  }
};
