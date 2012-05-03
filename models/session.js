var Model = require('LazyBoy');

var Session = Model.define('Session', {
  title: String,
    start_time: Date,
    end_time: Date,
    speaker: String
});

Session.addView('allByTime',{
  map:function(doc) {
    if (doc.model_type === 'Session') {
      emit(doc.start_time, doc);
    }
  }
});
