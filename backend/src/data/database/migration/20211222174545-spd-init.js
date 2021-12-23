/*eslint-disable*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      create table spd
      (
        id serial not null,
        name varchar not null
      );
      
      create unique index spd_id_uindex
        on spd (id);
      
      alter table spd
        add constraint spd_pk
          primary key (id);
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('spd');
  }
};
