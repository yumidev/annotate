'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
    'lyrics',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      artist: Sequelize.STRING,
      content: {
        type: Sequelize.TEXT,
        defaultValue: false,
        allowNull: false
      }
    }
  )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('lyrics')

  }
};
