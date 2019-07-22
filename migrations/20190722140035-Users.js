'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: Sequelize.STRING,
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      email: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Users');
  }
};
