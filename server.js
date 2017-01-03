var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
// var db = require('./db.js');

var ideas = [];
var ideaId = 1;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var middleware = require('./lib/middleware.js');

app.use(express.static(__dirname + '/public'));
app.use(middleware.logger);

app.get('/login', middleware.requireAuthentication, function(req,res) {
  res.send('Hello Express');
});

// GET /ideas
app.get('/ideas', function(req, res) {
  res.json(ideas);
});

// GET /ideas/:id
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
});

// POST /ideas
app.post('/ideas', function(req, res) {
  var idea = req.body;
  if (idea && Object.keys(idea).length !== 0) {
    idea.id = ideaId++;
    ideas.push(idea);
  }
  res.json(idea);
});

// DELETE /ideas/:id
app.delete('/ideas/:id', function(req, res) {
  var ideaId = parseInt(req.params.id,10);
  var idea;
  idea = ideas.find(function(idea){
    return idea.id === ideaId;
  });
  ideas = ideas.filter(function(idea) {
    return idea.id !== ideaId;
  });


  res.json(idea);
});

// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server started on port:', PORT);
  });
// })
