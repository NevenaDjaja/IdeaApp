var Sequelize = require('sequelize');
var sequelize = new Sequelize(
  undefined,
  undefined,
  undefined,
  {
    'dialect': 'sqlite',
    'storage': 'basic-sqlite-db.sqlite'
  }
);

var Idea = sequelize.define('idea', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 500]
    }
  }
});

sequelize.sync().then(function() {
  Idea.findById(3).then(function(idea){
    if (idea) {
      console.log('Idea:', idea.toJSON())
    } else {
      console.log('Idea not found')
    }
  });

  // Idea.create({
  //   text: 'Organize pitching events'
  // }).then(function(idea) {
  //   return Idea.create({
  //     text: 'I want to build a motion sensor'
  //   });
  // }).then(function(){
  //   // return Idea.findById(1)
  //   return Idea.findAll({
  //     where: {
  //       text: {
  //         $like: '%events%'
  //       }
  //     }
  //   })
  // }).then(function(ideas) {
  //   if (ideas) {
  //     ideas.forEach(function(idea) {
  //       console.log('Idea:',idea.toJSON())
  //     })
  //   } else {
  //     console.log('No idea found')
  //   }
  // }).catch(function(e) {
  //   console.log('Error:', e);
  // });
});
