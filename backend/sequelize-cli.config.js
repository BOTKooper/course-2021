const { config } = require('node-config-ts');

const { postgres } = config;

// fucking sequelize-cli hack
module.exports = {
  [process.env.NODE_ENV]: postgres,
  local: postgres,
  development: postgres,
  staging: postgres,
  production: postgres,
};
