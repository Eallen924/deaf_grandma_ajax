$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // capture the submit of the click button 'say it'
  $('form').on('submit', function(e){
    e.preventDefault();
    var formData = $(this).serialize();
    $.post('/grandma', formData, function(response){
      $('body').html(response);
    });
  });
});
