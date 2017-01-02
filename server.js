var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var ideas = require('./src/mocks/ideas');
// var db = require('./db.js');

var middleware = require('./lib/middleware.js');

app.use(express.static(__dirname + '/public'));
app.use(middleware.logger);

app.get('/login', middleware.requireAuthentication, function(req,res) {
  res.send('Hello Express');
});

app.get('/ideas', function(req, res) {
  res.json(ideas);
});

app.get('/ideas/:id', function(req, res) {
  var ideaId = req.params.id;
  var idea;

  idea = ideas.filter(function(idea) {
    return idea.id === parseInt(ideaId, 10);
  })[0];

  if (idea) {
    res.json(idea);
  } else {
    res.status(404).send();
  }
})

// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server started on port:', PORT);
  });
// })
