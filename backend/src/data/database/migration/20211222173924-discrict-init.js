/*eslint-disable*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      create table district
      (
        id serial not null,
        name varchar not null
      );
      
      create unique index district_id_uindex
        on district (id);
      
      alter table district
        add constraint district_pk
          primary key (id);
    `)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('district');
  }
};
