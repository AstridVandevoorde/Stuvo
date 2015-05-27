/* jshint
browser: true,
devel: true,
jquery: true
*/

$(document).ready(function () {
  var menu_active = false;

  $('.nav_knop').on('click', function () {
    $('#container').slideToggle();
    if(menu_active == false){
      menu_active == true;
      if($("#wrapper").length === 0){
        console.log("bestaat niet");
      }else{
        $('#wrapper').css("z-index",-40);
      }
    }else{
      menu_active == false;
      if($("#wrapper").length === 0){
        console.log("bestaat niet");
      }else{
        $('#wrapper').css("z-index","inherit");
      }
    }

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