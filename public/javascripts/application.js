var d = new Date();
date_now = localTime(d.toUTCString()); //localTime(new Date("19 September, 2011, 08:50:00"));
//alert(date_now);
/*setInterval(function () {
  date_now.setMinutes(date_now.getMinutes() + 5);
},5000);*/


function localTime(dateString) {
  var date,
  local_time

    //console.log(dateString);
    date = new Date(dateString); 
    local_time = new Date(date.toUTCString());
    local_time.setHours(local_time.getHours() + 2);
    //console.log(local_time);

    return local_time;  
}


window.surge = window.surge || {};

surge.Session =  Backbone.Model.extend({});

surge.SessionCollection = Backbone.Collection.extend({
  model: surge.Session,
  
  getCurrentSession: function () {
    var current_session;

    current_session = this.select(function (item) {
      if((item.get("start_time") <= date_now) && (item.get("end_time") > date_now)) {
        return true;
      }

      return false;
    });
    return current_session[0];
  },

});

surge.CurrentSessionView = Backbone.View.extend({

  id: "#sessionList",
  template: _.template("<li><a href=\"#sessionPage_<%=this.model.get('id')%>\"><h3>Current Session</h3><p><%=this.model.get('title')%></p></a></li>"),
  render_with_new_model: function (model) {
    if (!model) {
      return this.render_default();
    }

    this.model = model;
    this.render();
  },

  render_default: function () {
    $("#sessionList").html("<li><h3>Current Session</h3><p>No session currently running</p>");
    $("#sessionList").listview("refresh")
  },

  render: function () {
    $("#sessionList").html(this.template(this.model.toJSON()));
    $("#sessionList").listview("refresh")
      return this;
  }

});

surge.current_session_view = new surge.CurrentSessionView();

function update_session() {
  var d = new Date();
  date_now = localTime(d.toUTCString());

  if (!surge.current_session || (surge.current_session.get("end_time") < date_now)) {
    //console.log(date_now);
    //console.log("updating session");  
    surge.current_session = surge.sessions.getCurrentSession();
    //console.log(surge.current_session);
    surge.current_session_view.render_with_new_model(surge.current_session);
  }

}

setInterval(update_session, 60000);


$('#mainPage').live('pagebeforeshow',function(event){
  update_session();
});

$('#sessionPage').live('pagecreate',function(event){
  surge.QuestionView = Backbone.View.extend({
    initialize: function (options) {
    },

    render: function (event) {
      alert("render");
      return "booming"
    },

    events: {
      "click #my_button": "question"
    },

    question: function (event) {
      console.log("boom");
      console.log(event)
    this.render();

  //return false;
    }


  });


  surge.qview = new surge.QuestionView({ el: $('body')});
});


