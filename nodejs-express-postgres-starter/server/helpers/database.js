var pg = require('pg');
var pgconfig = require('../config');

var config = {
  user: pgconfig.postgres.username,
  host: pgconfig.postgres.host,
  database: pgconfig.postgres.database,
  password: pgconfig.postgres.password,
  port: pgconfig.postgres.port, 
  max: 10,
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);
module.exports=pool;