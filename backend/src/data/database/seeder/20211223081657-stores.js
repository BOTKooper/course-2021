/*eslint-disable*/
const _ = require('lodash');
const dataset = require('../../../../dataset.json');

const districtNames = dataset.map(({ district }) => district)
const spdNames = dataset.map(({ spdName }) => spdName)

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const [districts] = await queryInterface.sequelize.query(`select * from district`);
    const [spds] = await queryInterface.sequelize.query(`select * from spd`);

    const r = [];

    const entities = dataset.map((entry) => ({
        name: entry.name,
        spdId: spds.find((s) => s.name === entry.spdName).id,
        districtId: districts.find((s) => s.name === entry.district).id,
        street: entry.street || null,
        hours: entry.hours || null,
    }));

    console.log(entities);

    await queryInterface.bulkInsert('store', entities, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('store', null, {});
  }
};
