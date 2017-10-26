var config = require('./config');

config.port = process.env.PORT || config.port;

config.postgres.host = process.env.PG_HOST || config.postgres.host;
config.postgres.database = process.env.PG_DATABASE || config.postgres.database;
config.postgres.port = process.env.PG_PORT || config.postgres.port;
config.postgres.username = process.env.PG_DB_USERNAME || config.postgres.username;
config.postgres.password = process.env.PG_DB_PASSWORD || config.postgres.password;

module.exports = config;