'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
    'annotates',
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
      comment: {
        type: Sequelize.TEXT,
        defaultValue: false,
        allowNull: false
      },
      lineNumber: {
        type: Sequelize.INTEGER,
      },
      songId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'lyrics',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    }
  )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('annotates')
  }
};
