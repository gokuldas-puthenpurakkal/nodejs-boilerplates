var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var compression = require('compression');
var consign = require('consign');

var config = require('./config');

var app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.routes = express.Router();

app.use(function (req, res, next) {
    console.log(req.method, " ", req.url);
    next();
});

app.use('/api/', app.routes);

consign({ cwd: 'server' })
    .include('controllers')
    .then('routes')
    .into(app);

app.use((req, res) => {
    res.status(404).end();
});

//app.use(express.static("./"));

app.use(cors);

app.listen(config.port);

module.exports = app;