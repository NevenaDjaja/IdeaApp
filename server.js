var express = require('express');
var app = express();
var _ = require('underscore');
var validator = require('validator');
const PORT = process.env.PORT || 5000;
// var db = require('./db.js');

var ideas = [];
var ideaId = 1;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Fix for Heroku
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

var middleware = require('./lib/middleware.js');
app.use(middleware.logger);

app.get('/login', middleware.requireAuthentication, function(req,res) {
  res.send('Hello Express');
});

// GET /ideas
app.get('/ideas', function(req, res) {
  res.status(200).json(ideas);
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
  if (Object.keys(req.body).length !== 0) {
    var idea = _.pick(req.body, 'title', 'description', 'likes', 'comments');
    if (!validator.isEmpty(idea.title) && validator.isAlphanumeric(idea.title.replace(/\s/g,''))
        && !validator.isEmpty(idea.description) && validator.isAlphanumeric(idea.description.replace(/\s/g,''))
        && !validator.isEmpty(idea.likes.toString()) && validator.isInt(idea.likes.toString())
        && !validator.isEmpty(idea.comments.toString()) && validator.isInt(idea.comments.toString())
       )
    {
      idea.title = validator.trim(idea.title);
      idea.description = validator.trim(idea.description);

      idea.id = ideaId++;
      ideas.push(idea);
      return res.status(200).json(idea);
    }
  }
});

// DELETE /ideas/:id
app.delete('/ideas/:id', function(req, res) {
  var ideaId = parseInt(req.params.id,10);
  var idea;
  idea = ideas.find(function(idea){
    return idea.id === ideaId;
  });

  if (!idea) {
    return res.status(404).json({"Error: ":"No idea found with id: " + ideaId});
  }

  ideas = ideas.filter(function(idea) {
    return idea.id !== ideaId;
  });

  return res.status(200).json(idea);
});

// PUT /ideas/:id
app.put('/ideas/:id', function(req, res) {
  var reqIdeaId = parseInt(req.params.id);
  var reqIdea = _.findWhere(ideas, { id: reqIdeaId });
  var validAttrs = {};

  if (!reqIdea) {
    return res.status(404).send("The entry not found");
  }

  if (Object.keys(req.body).length !== 0) {
    var idea = _.pick(req.body, 'title', 'description', 'likes', 'comments');

    if (!validator.isEmpty(idea.title) && validator.isAlphanumeric(idea.title.replace(/\s/g,''))) {
      validAttrs.title = idea.title.trim();
    }
    if (!validator.isEmpty(idea.description) && validator.isAlphanumeric(idea.description.replace(/\s/g,''))) {
      validAttrs.description = idea.description.trim();
    }
    if (!validator.isEmpty(idea.likes.toString()) && validator.isInt(idea.likes.toString())) {
      validAttrs.likes = idea.likes;
    }
    if (!validator.isEmpty(idea.comments.toString()) && validator.isInt(idea.comments.toString())) {
      validAttrs.comments = idea.comments;
    }

    _.extend(reqIdea, validAttrs);
    return res.status(200).json(reqIdea);
  }
});

// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('Server started on port:', PORT);
  });
// })
