/**
 * Created by john on 14/10/17.
 */
var express = require('express');
var app = express();
var routes = require('./routes/index.js');
var path = require('path');

app.use('/', routes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(8090, function () {
    console.log('Listening on 8090');
});

module.exports = app;
