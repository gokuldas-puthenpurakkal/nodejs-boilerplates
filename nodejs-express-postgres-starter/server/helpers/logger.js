var winston = require('winston');
var fs = require('fs');
var config = require('../config');

var env = config.env;
var logDir = config.logger.logDir;

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
var tsFormat = () => (new Date()).toLocaleTimeString();
var logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: config.logger.consoleLogLevel
    }),
    new (require('winston-daily-rotate-file'))({
      filename: `${logDir}/${config.logger.filename}`,
      timestamp: tsFormat,
      datePattern: config.logger.datePattern,
      prepend: true,
      level: env === 'development' ? config.logger.devFileLogLevel : config.logger.prodFileLogLevel
    })
  ]
});
module.exports = logger;