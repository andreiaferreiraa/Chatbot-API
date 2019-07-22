'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.createTable('Jobs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      candidateDescript: Sequelize.TEXT('long'),
      remote: Sequelize.BOOLEAN,
      formation: Sequelize.BOOLEAN,
      travelOtCountrys: Sequelize.BOOLEAN,
      shifts: Sequelize.BOOLEAN,
      location: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Locations',
          key: 'id',
          as: 'location'
        }
      },
      area: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Locations',
          key: 'id',
          as: 'location'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};
