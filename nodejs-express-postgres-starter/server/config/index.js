var config = require('./config');

config.port = process.env.PORT || config.port;
config.env = process.env.ENV || 'development';

config.postgres.host = process.env.PG_HOST || config.postgres.host;
config.postgres.database = process.env.PG_DATABASE || config.postgres.database;
config.postgres.port = process.env.PG_PORT || config.postgres.port;
config.postgres.username = process.env.PG_DB_USERNAME || config.postgres.username;
config.postgres.password = process.env.PG_DB_PASSWORD || config.postgres.password;

config.logger.logDir =  process.env.LOG_DIR  || config.logger.logDir;
config.logger.filename = process.env.LOG_FILE_NAME || config.logger.filename;
config.logger.datePattern = process.env.PG_LOG_FILE_DATE_PATTERN || config.logger.datePattern;
config.logger.consoleLogLevel = process.env.PG_LOG_CONSOLE_LEVEL || config.logger.datePattern;
config.logger.devFileLogLevel = process.env.PG_LOG_FILE_DEV_LEVEL || config.logger.datePattern;
config.logger.prodFileLogLevel = process.env.PG_LOG_FILE_PROD_LEVEL || config.logger.datePattern;

module.exports = config;