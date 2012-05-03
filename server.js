
/**
 * Module dependencies.
 */

var express = require('express'),
    async = require('async'),
    Model = require('LazyBoy');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  console.log("development");
  Model.create_connection("jsinsa");
  Model.load('models');
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
  console.log("production");
  Model.create_connection({
    url: 'https://garrensmith.cloudant.com',
    port: '443',
    db:'jsinsa_prod',
    auth: { 
        username: 'deesecendetumandereendle',
        password: 'g4wS4ojqVrHQPaIES8u2yLHu'
    },
    secure:true,
  });
  Model.load('models'); 
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  // app.use(express.errorHandler()); 
});

// Routes
app.get('/seed_me', function(req,res) {
  require('./seeds')();
  res.send("seeding");
});

app.get('/', function(req, res){

  async.parallel({
    sessions: function(callback){
      console.log("session");
      var Session = Model('Session');
      Session.view('allByTime',function (err, sessions) {

        sessions.forEach(function (item) {
          item.start_time = new Date(item.start_time).toUTCString();
          item.end_time = new Date(item.end_time).toUTCString();

          if (!item.questions) {
            item.questions = [];
          }
        });

        console.log("result");
        callback(err, sessions);
      });
    },
    comments: function(callback) {
      var Comment = Model('Comment');
      Comment.all(function (err, comments) {
        callback(err, comments);
      })
    }
  },
  function(err, results) {
    if (err) {
      console.log("error");
      console.dir(err);
    };

    console.log("result");

    var mapped = results.sessions.map(function (item) {
      return item.serialise();
    });

    console.log("rendering");
    //console.dir(mapped);
    res.render('index', { sessions: results.sessions, mapped: mapped, comments: results.comments});
  });


});

app.post('/comment',function (req, res) {
  console.log(req.body);
  console.log(req.params);

  var comment = req.body.comment;
  Comment = Model('Comment');

  Comment.create({name: comment.name, msg: comment.msg}).save();
  
  res.send({response:"ok"});

});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

 
