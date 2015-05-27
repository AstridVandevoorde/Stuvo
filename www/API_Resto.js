$(document).ready(function () {
    var sendData = {
        url: 'api/nieuws.php'
    };
    $.ajax({
        url: 'http://dtprojecten.ehb.be/~stuvo/public_html/api/resto.php',
        data: sendData,
        type: 'POST',
        dataType: 'json',
        error: function (err) {
            console.dir(err);
        },
        success: function (data) {
          console.log(data.menu["MAANDAG/LUNDI"]["Soep"]);

          var carousel,
          el,
          i,
          page,
          slides = [
    ' <div class = "slider"><p class="weekdag">Maandag</p><h2>Dagschotel</h2><p class="content_menu1">'+data.menu["MAANDAG/LUNDI"]["Dagschotel"]+'</p><h2>Soep</h2><p class="content_menu1">'+data.menu["MAANDAG/LUNDI"]["Soep"]+'</p><h2>Broodje van de week</h2><p class="content_menu2">'+data.menu["MAANDAG/LUNDI"]["Broodje van de week"]+'</p><h2>Veggie schotel</h2><p class="content_menu3">'+data.menu["MAANDAG/LUNDI"]["Vegetarische Schotel"]+'</p><h2>Koude schotel</h2><p class="content_menu4">'+data.menu["MAANDAG/LUNDI"]["koude Schotel"]+'</p><h2>Panninis</h2><p class="content_menu5">'+data.menu["MAANDAG/LUNDI"]["Panini"]+'</p><h2>Dessert</h2><p class="content_menu6">'+data.menu["MAANDAG/LUNDI"]["Dessert"]+'</p></div>',
    ' <div class = "slider"><p class="weekdag">Dinsdag</p><h2>Dagschotel</h2><p class="content_menu1">'+data.menu["DINSDAG/MARDI"]["Dagschotel"]+'</p><h2>Soep</h2><p class="content_menu1">'+data.menu["DINSDAG/MARDI"]["Soep"]+'</p><h2>Broodje van de week</h2><p class="content_menu2">'+data.menu["DINSDAG/MARDI"]["Broodje van de week"]+'</p><h2>Veggie schotel</h2><p class="content_menu3">'+data.menu["DINSDAG/MARDI"]["Vegetarische Schotel"]+'</p><h2>Koude schotel</h2><p class="content_menu4">'+data.menu["DINSDAG/MARDI"]["koude Schotel"]+'</p><h2>Panninis</h2><p class="content_menu5">'+data.menu["DINSDAG/MARDI"]["Panini"]+'</p><h2>Dessert</h2><p class="content_menu6">'+data.menu["DINSDAG/MARDI"]["Dessert"]+'</p></div>',
    ' <div class = "slider"><p class="weekdag">Woensdag</p><h2>Dagschotel</h2><p class="content_menu1">'+data.menu["WOENSDAG/MERCREDI"]["Dagschotel"]+'</p><h2>Soep</h2><p class="content_menu1">'+data.menu["WOENSDAG/MERCREDI"]["Soep"]+'</p><h2>Broodje van de week</h2><p class="content_menu2">'+data.menu["WOENSDAG/MERCREDI"]["Broodje van de week"]+'</p><h2>Veggie schotel</h2><p class="content_menu3">'+data.menu["WOENSDAG/MERCREDI"]["Vegetarische Schotel"]+'</p><h2>Koude schotel</h2><p class="content_menu4">'+data.menu["WOENSDAG/MERCREDI"]["koude Schotel"]+'</p><h2>Panninis</h2><p class="content_menu5">'+data.menu["WOENSDAG/MERCREDI"]["Panini"]+'</p><h2>Dessert</h2><p class="content_menu6">'+data.menu["WOENSDAG/MERCREDI"]["Dessert"]+'</p></div>',
    ' <div class = "slider"><p class="weekdag">Donderdag</p><h2>Dagschotel</h2><p class="content_menu1">'+data.menu["DONDERDAG/JEUDI"]["Dagschotel"]+'</p><h2>Soep</h2><p class="content_menu1">'+data.menu["DONDERDAG/JEUDI"]["Soep"]+'</p><h2>Broodje van de week</h2><p class="content_menu2">'+data.menu["DONDERDAG/JEUDI"]["Broodje van de week"]+'</p><h2>Veggie schotel</h2><p class="content_menu3">'+data.menu["DONDERDAG/JEUDI"]["Vegetarische Schotel"]+'</p><h2>Koude schotel</h2><p class="content_menu4">'+data.menu["DONDERDAG/JEUDI"]["koude Schotel"]+'</p><h2>Panninis</h2><p class="content_menu5">'+data.menu["DONDERDAG/JEUDI"]["Panini"]+'</p><h2>Dessert</h2><p class="content_menu6">'+data.menu["DONDERDAG/JEUDI"]["Dessert"]+'</p></div>',
    ' <div class = "slider"><p class="weekdag">Vrijdag</p><h2>Dagschotel</h2><p class="content_menu1">'+data.menu["VENDREDI/VRIJDAG"]["Dagschotel"]+'</p><h2>Soep</h2><p class="content_menu1">'+data.menu["VENDREDI/VRIJDAG"]["Soep"]+'</p><h2>Broodje van de week</h2><p class="content_menu2">'+data.menu["VENDREDI/VRIJDAG"]["Broodje van de week"]+'</p><h2>Veggie schotel</h2><p class="content_menu3">'+data.menu["VENDREDI/VRIJDAG"]["Vegetarische Schotel"]+'</p><h2>Koude schotel</h2><p class="content_menu4">'+data.menu["VENDREDI/VRIJDAG"]["koude Schotel"]+'</p><h2>Panninis</h2><p class="content_menu5">'+data.menu["VENDREDI/VRIJDAG"]["Panini"]+'</p><h2>Dessert</h2><p class="content_menu6">'+data.menu["VENDREDI/VRIJDAG"]["Dessert"]+'</p></div>'
  ];

carousel = new SwipeView('#wrapper', {
  numberOfPages: slides.length,
  hastyPageFlip: true
});

// Load initial data
for (i=0; i<3; i++) {
  page = i==0 ? slides.length-1 : i-1;
  el = document.createElement('span');
  el.innerHTML = slides[page];
  carousel.masterPages[i].appendChild(el)
  $('#bol1').css("background-color","red");
}

carousel.onFlip(function () {
  var el,
    upcoming,
    i;
  for (i=0; i<3; i++) {
    upcoming = carousel.masterPages[i].dataset.upcomingPageIndex;


    if (upcoming != carousel.masterPages[i].dataset.pageIndex) {
      el = carousel.masterPages[i].querySelector('span');
      console.log(carousel.pageIndex);
      switch(carousel.pageIndex){
        case 0: $('#bol1').css("background-color","red");
                $('#bol2,#bol3,#bol4,#bol5').css("background-color","rgb(220, 220, 220)");
                break;
        case 1: $('#bol2').css("background-color","red");
                $('#bol1,#bol3,#bol4,#bol5').css("background-color","rgb(220, 220, 220)");
                break;
        case 2: $('#bol3').css("background-color","red");
                $('#bol2,#bol1,#bol4,#bol5').css("background-color","rgb(220, 220, 220)");
                break;
        case 3: $('#bol4').css("background-color","red");
                $('#bol2,#bol3,#bol1,#bol5').css("background-color","rgb(220, 220, 220)");
                break;
        case 4: $('#bol5').css("background-color","red");
                $('#bol2,#bol3,#bol4,#bol1').css("background-color","rgb(220, 220, 220)");
                break;

      }
      el.innerHTML = slides[upcoming];
    }
  }
});
       }
    });

});