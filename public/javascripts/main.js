$(document).ready(function() {
  $('.add-button').click(function () {
    $.ajax({
        type: 'POST',
        url: '/addItem',
        data: { todoItem : $(".input-box").val() },
        dataType: "json",
        cache: false,
        timeout: 5000,
        success: function(data) {
          console.log('item added to db');
          console.log(data);
        },
        error: function(err, message) {
          
        }


    });
    console.log("item input: " + $(".input-box").val());
  });
});
