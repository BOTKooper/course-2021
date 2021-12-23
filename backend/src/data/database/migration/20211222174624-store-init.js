/*eslint-disable*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      create table store
      (
        id serial not null,
        name varchar not null,
        hours varchar,
        street varchar not null,
        "districtId" int not null
          constraint store_district_id_fk
            references district,
        "spdId" int not null
          constraint store_spd_id_fk
            references spd
      );
      
      create unique index store_id_uindex
        on store (id);
      
      alter table store
        add constraint store_pk
          primary key (id);
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('store');
  }
};
