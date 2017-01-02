var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  undefined,
  undefined,
  undefined,
  {
    'dialect': 'sqlite',
    'storage': __dirname + '/data/dev-idea-api.sqlite'
  }
);

var db = {};

db.idea = sequelize.import(__dirname + '/src/models/idea.js')
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
