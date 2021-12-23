/*eslint-disable*/
const _ = require('lodash');
const dataset = require('../../../../dataset.json');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('spd', dataset.map(({ spdName }) => ({ name: spdName })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('spd', null, {});
  }
};
