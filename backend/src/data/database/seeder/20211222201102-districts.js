/*eslint-disable*/
const _ = require('lodash');
const dataset = require('../../../../dataset.json');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('district', dataset.map(({ district }) => ({ name: district })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('district', null, {});
  }
};
