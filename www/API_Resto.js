$(document).ready(function () {
    var sendData = {
        url: 'api/nieuws.php'
    };
    $.ajax({
        url: 'http://dtprojecten.ehb.be/~stuvo/public_html/api/agenda.php',
        data: sendData,
        type: 'POST',
        dataType: 'json',
        error: function (err) {
            console.dir(err);
        },
        success: function (data) {


          var carousel,
          el,
          i,
          page,
          slides = [
    ' <div class = "slider"><p class="weekdag">Maandag</p><h2>Dagschotel</h2><p class="content_menu1">Steak met frietjes</p><h2>Broodjes</h2><p class="content_menu2">Tonijnsla</p><h2>Veggie schotel</h2><p class="content_menu3">Zomerslaatje</p><h2>Koude schotel</h2><p class="content_menu4">Lorem ipsum</p><h2>Panninis</h2><p class="content_menu5">italiaanse panini</p><h2>Dessert</h2><p class="content_menu6">ijsjes</p></div>',
    '<div class = "slider"><p class="weekdag">Dinsdag</p><h2>Dagschotel</h2><p class="content_menu1">Steak met frietjes</p><h2>Broodjes</h2><p class="content_menu2">Tonijnsla</p><h2>Veggie schotel</h2><p class="content_menu3">Zomerslaatje</p><h2>Koude schotel</h2><p class="content_menu4">Lorem ipsum</p><h2>Panninis</h2><p class="content_menu5">italiaanse panini</p><h2>Dessert</h2><p class="content_menu6">ijsjes</p></div>',
    '<div class = "slider"><p class="weekdag">Woensdag</p><h2>Dagschotel</h2><p class="content_menu1">Steak met frietjes</p><h2>Broodjes</h2><p class="content_menu2">Tonijnsla</p><h2>Veggie schotel</h2><p class="content_menu3">Zomerslaatje</p><h2>Koude schotel</h2><p class="content_menu4">Lorem ipsum</p><h2>Panninis</h2><p class="content_menu5">italiaanse panini</p><h2>Dessert</h2><p class="content_menu6">ijsjes</p></div>',
    '<div class = "slider"><p class="weekdag">Donderdag</p><h2>Dagschotel</h2><p class="content_menu1">Steak met frietjes</p><h2>Broodjes</h2><p class="content_menu2">Tonijnsla</p><h2>Veggie schotel</h2><p class="content_menu3">Zomerslaatje</p><h2>Koude schotel</h2><p class="content_menu4">Lorem ipsum</p><h2>Panninis</h2><p class="content_menu5">italiaanse panini</p><h2>Dessert</h2><p class="content_menu6">ijsjes</p></div>',
    '<div class = "slider"><p class="weekdag">Vrijdag</p><h2>Dagschotel</h2><p class="content_menu1">Steak met frietjes</p><h2>Broodjes</h2><p class="content_menu2">Tonijnsla</p><h2>Veggie schotel</h2><p class="content_menu3">Zomerslaatje</p><h2>Koude schotel</h2><p class="content_menu4">Lorem ipsum</p><h2>Panninis</h2><p class="content_menu5">italiaanse panini</p><h2>Dessert</h2><p class="content_menu6">ijsjes</p>'
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
}

carousel.goToPage(1);

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