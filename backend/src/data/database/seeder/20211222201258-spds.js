/*eslint-disable*/
const _ = require('lodash');
const dataset = require('../../../../dataset.json');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const names = Array.from(new Set(dataset.map(({ spdName }) => spdName)));
    await queryInterface.bulkInsert('spd', names.map(name => ({ name })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('spd', null, {});
  }
};
