var express = require('express');
var app = require('./app/app');

var server = app.listen(app.get('port'), function () {
  console.log('Navardeboon server is listening on port ' + server.address().port + '!');
});
