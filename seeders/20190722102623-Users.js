'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',
      [
        {
          name: 'Andreia Ferreira',
          username: 'admin1',
          password: '$2b$08$Fh6Y6zd4zsHP1igb15PK0.cI2O6y48jYj1zP4m6MbTylOtPKDwqk.',
          email: 'aferreira@hotmail.com'
        },
        {
          name: 'André Santos',
          username: 'admin2',
          password: '$2b$08$wklXozkQ266hgRm2y6f7KOcjZPTLdKOVTp35TbRKnbj0hmrzNVrBW',
          email: 'asantos@hotmail.com'

        }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
