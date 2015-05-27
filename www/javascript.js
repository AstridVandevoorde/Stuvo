/* jshint
browser: true,
devel: true,
jquery: true
*/

$(document).ready(function () {
  var menu_active = false;
  var firstTimeApp = localStorage.getItem('firstTimeApp');
  var firstTimeBeer = localStorage.getItem('firstTimeBeer');
  var firstTimeEvent = localStorage.getItem('firstTimeEvent');
  var firstTimeResto = localStorage.getItem('firstTimeResto');
  

  console.log(firstTimeApp);
  if(firstTimeApp == null){
    firstTimeApp = false;
    localStorage.setItem('firstTimeApp', JSON.stringify(firstTimeApp));
    firstTimeBeer = "bierActive";
    localStorage.setItem('firstTimeBeer', JSON.stringify(firstTimeBeer));
    window.location.href = "CampusSelectie.html";

  }


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