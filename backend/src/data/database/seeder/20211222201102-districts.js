/*eslint-disable*/
const _ = require('lodash');
const dataset = require('../../../../dataset.json');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const names = Array.from(new Set(dataset.map(({ district }) => district)));
    await queryInterface.bulkInsert('district', names.map(name => ({ name })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('district', null, {});
  }
};
