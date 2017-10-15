/**
 * Created by john on 14/10/17.
 */
var express = require('express');
var app = express();

var path = require('path');

var mongoose = require('mongoose');

// after the '/' what the db is called
var dbUrl = 'mongodb://localhost/toDoDB';

mongoose.connect(dbUrl, function (err) {
    if(err){
        console.log('Not connected to mongoose:', err);
    }else{
        console.log('Connected to mongoose:', dbUrl);
    }
});


var routes = require('./routes/index.js');
// gets the router from the file
app.use('/', routes);


var api = require('./routes/api');

app.use('/api', api);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// port the app is listing on
app.listen(8090, function () {
    console.log('Listening on 8090');
});

module.exports = app;
