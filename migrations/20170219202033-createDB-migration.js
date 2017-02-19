'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'ideas',
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
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [1, 200]
          }
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [1, 1000]
          }
        },
        likes: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        comments: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
