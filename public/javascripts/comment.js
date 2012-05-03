$("#commentsPage").live('pageinit', function () {

  $('#commentForm').submit(function (event) {
    event.preventDefault();

    var comment = {
                    name: $("#comment_name").val(), 
                    msg: $("#comment_msg").val()
                  }

    $("#comment_name").val("");
    $("#comment_msg").val(""); 

    var promise = $.post("/comment", { comment: comment  });
    $('#comments-display').append(ich.newTemplate(comment));
    $($.mobile.activePage).trigger('create')
  });

});
