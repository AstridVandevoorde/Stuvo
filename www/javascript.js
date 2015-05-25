/* jshint
browser: true,
devel: true,
jquery: true
*/

$(document).ready(function () {

  $('.nav_knop').on('click', function () {
    $('#container').slideToggle();
  });
  
  $('.campus').click(function () {
    $('.campus').css({
      "border-color": "white"
    });
    $(this).css({
      "border-color": "red"
    });
  });

});