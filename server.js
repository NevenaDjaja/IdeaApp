var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./lib/middleware.js');

app.use(express.static(__dirname + '/public'));
app.use(middleware.logger);

app.get('/login', middleware.requireAuthentication, function(req,res) {
  res.send('Hello Express');
});

app.listen(PORT, function() {
  console.log('Server started on port:', PORT);
});
