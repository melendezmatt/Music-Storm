'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'bio', {
      type: Sequelize.STRING(280),
      allowNull: false,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'bio')
  }
};
