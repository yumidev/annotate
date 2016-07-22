#!/usr/bin/env node
// var debug = require('debug')('node-sequelize-postgresql');
var app = require('./app');
var models = require('./models');

app.set('port', (process.env.PORT || 3001));

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
