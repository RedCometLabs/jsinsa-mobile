var Model = require('LazyBoy');

module.exports = function () {
  var Session = Model('Session');
  var Comment = Model('Comment');

  Session.all(function (err, sessions) {
    if (sessions) {
      sessions.forEach(function (session) {
        session.remove();
      });
    }
  });

  Comment.all(function (err, comments) {
    if (comments) {  
      comments.forEach(function (comment) {
        comment.remove();
      });
    }
  });


  Session.create({title: "Registration"
    , start_time:  new Date(Date.UTC(0512,04,05,5,30,00))
    , end_time:  new Date(Date.UTC(0512,04,05,06,30,00))
    , speaker: null
  }).save();

  Session.create({title: "Welcome"
    , start_time:  new Date(Date.UTC(0512,04,05,06,30,00))
    , end_time:  new Date(Date.UTC(0512,04,05, 06,35,00))
    , speaker: "Simon Stewart"
  }).save();

  Session.create({title: "Keynote"
    , start_time: new Date(Date.UTC(0512,04,05,06,35,00))
    , end_time:  new Date(Date.UTC(0512,04,05,07,00,00))
    , speaker: "Alan Michas"
  }).save();

  Session.create({title: "HTML5 and CSS3 - this is bat country"
    , start_time:  new Date(Date.UTC(0512,04,05,07,00,00))
    , end_time:  new Date(Date.UTC(0512,04,05,07,45,00))
    , speaker: "Johann de Swardt "
  }).save();

  Session.create({title: "Break"
    , start_time:  new Date(Date.UTC(0512,04,05,07,45,00))
    , end_time:  new Date(Date.UTC(0512,04,05,08,00,00))
    , speaker: ""
  }).save();

  Session.create({title: "Building Windows 8 applications with JavaScript"
    , start_time:  new Date(Date.UTC(0512,04,05,08,00,00))
    , end_time:  new Date(Date.UTC(0512,04,05,08,45,00))
    , speaker: "Robert MacLean"
  }).save();

  Session.create({title: "Databinding in HTML5 is a Knockout"
    , start_time:  new Date(Date.UTC(0512,04,05,08,45,00))
    , end_time:  new Date(Date.UTC(0512,04,05,09,30,00))
    , speaker: "Peter Munnings"
  }).save();

  Session.create({title: "Mini Break"
    , start_time:  new Date(Date.UTC(0512,04,05,09,30,00))
    , end_time:  new Date(Date.UTC(0512,04,05,09,35,00))
    , speaker: ""
  }).save();

  Session.create({title: "SASS and the Compass framework"
    , start_time:  new Date(Date.UTC(0512,04,05,09,35,00))
    , end_time:  new Date(Date.UTC(0512,04,05,10,20,00))
    , speaker: "Steven McDonald"
  }).save();

  Session.create({title: "Lunch"
    , start_time:  new Date(Date.UTC(0512,04,05,10,20,00))
    , end_time:  new Date(Date.UTC(0512,04,05,11,20,00))
    , speaker: ""
  }).save();

  Session.create({title: "Using Websockets Today"
    , start_time:  new Date(Date.UTC(0512,04,05,11,20,00))
    , end_time:  new Date(Date.UTC(0512,04,05,12,05,00))
    , speaker: "William Brander"
  }).save();

  Session.create({title: "Storing Data On The Client with HTML5"
    , start_time:  new Date(Date.UTC(0512,04,05,12,05,00))
    , end_time:  new Date(Date.UTC(0512,04,05,12,50,00))
    , speaker: "Jarrod Hermer"
  }).save();

  Session.create({title: "Break"
    , start_time:  new Date(Date.UTC(0512,04,05,12,50,00))
    , end_time:  new Date(Date.UTC(0512,04,05,13,05,00))
    , speaker: "Jarrod Hermer"
  }).save();

  Session.create({title: "Develop mobile web apps like the Cool Kids"
    , start_time:  new Date(Date.UTC(0512,04,05,13,05,00))
    , end_time:  new Date(Date.UTC(0512,04,05,13,50,00))
    , speaker: "Garren Smith"
  }).save();

  Session.create({title: "Making games with HTML5"
    , start_time:  new Date(Date.UTC(0512,04,05,13,50,00))
    , end_time:  new Date(Date.UTC(0512,04,05,14,35,00))
    , speaker: "Pieter Germishuys"
  }).save();

  Session.create({title: "Mini Break"
    , start_time:  new Date(Date.UTC(0512,04,05,14,35,00))
    , end_time:  new Date(Date.UTC(0512,04,05,14,40,00))
    , speaker: ""
  }).save();

  Session.create({title: "Lessons learnt building MadMimi 2"
    , start_time:  new Date(Date.UTC(0512,04,05,14,40,00))
    , end_time:  new Date(Date.UTC(0512,04,05,15,25,00))
    , speaker: "Mark Heiligers "
  }).save();

  Session.create({title: "Closing and giveaways"
    , start_time:  new Date(Date.UTC(0512,04,05,15,25,00))
    , end_time:  new Date(Date.UTC(0512,04,05,15,35,00))
    , speaker: ""
  }).save();


  var Comment = Model('Comment');
  Comment.create({name: "Garren", msg: "Welcome to this little test app"}).save();


};

