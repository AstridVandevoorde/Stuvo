/* jshint
devel: true,
browser: true,
jquery: true
*/

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
             var firstTimeEvent = localStorage.getItem('firstTimeEvent');
            if(firstTimeEvent == null){

                $(".overlay").fadeToggle("fast");
            }
             $(".close").click(function () {
                $(".overlay").fadeToggle("fast");
                firstTimeEvent == false;
                localStorage.setItem('firstTimeEvent', JSON.stringify(firstTimeEvent));

            });


            Object.byString = function(o, s) {
                s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
                s = s.replace(/^\./, '');           // strip a leading dot
                var a = s.split('.');
                for (var i = 0, n = a.length; i < n; ++i) {
                    var k = a[i];
                    if (k in o) {
                        o = o[k];
                    } else {
                        return;
                    }
                }
                return o;
                }

                var monthsTotal = Object.keys(data.events)[1];
                var htmlString = "";
                var total = Object.keys(data.events);
                var currentDate = new Date();
                var currentMonth = currentDate.getMonth();
                var months = ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];
                //console.log(Object.byString(data.events,monthsTotal));
                //console.log(monthsTotal);
                //console.log(total);
                /*console.log(currentDate);
                console.log(total);
                console.log(data.events.Juni);
                
                console.log(monthsTotal);*/
                for(var i = 0;i<total.length;i++){
                    //console.log("lengte= " +total.length);
                    var thisMonth = total[i].replace(/[0-9]/g,'');
                    //console.log("totalblabla " + thisMonth);
                    for(var x = 0;x<11;x++){
                        if(thisMonth == months[x]){
                            if(x >= currentMonth){
                                //console.log(thisMonth + "= " + x + " & huidig = " + currentMonth);
                                var getEvent = Object.byString(data.events,thisMonth);
                                //console.log(getEvent);
                                //console.log("hierboven");

                                //Maand toevoegen
                                htmlString +=  '<div class="month"><h1 class="h1-event">'+ thisMonth +'</h1>';
                                //Events toevoegen
                                for(var y = 0;y<getEvent.length;y++){
                                    /*console.log(thisMonth);
                                    console.log(getEvent[y]);
                                    console.log(getEvent[y].name);*/
                                    console.log(getEvent[y]);
                                    htmlString +=  '<div class="item_calender"><div class="days">'+getEvent[y].date.startday+'</div><h2 class="event_title">'+ getEvent[y].name +'</h2><p class="event_description">Locatie - 9:00AM <br>Lorem ipsum drinkt graag bier, en overal is er plezier. Ipsum drinkt graag bier, en overal is er plezier.</div>'

                                }
                                //Maand sluiten
                                htmlString += '</div>';
                                
                            }

                        }
                    }
                }
                $('.wrapper').append(htmlString);


         


                //for(var i=0;i<arrayMax;i++){


            /*for(var i=0;i<arrayMax;i++){
                var htmlString = '';
                var datum = data.data[i].created_time;
                if(titel){
                     if(titel.length > 40){
                    titel = titel.substring(0,40) + "..";
                    }
                }else{
                    titel = "Aankondiging!";
                }
                if(image){

                }else{
                    var image = "news_2.png";
                }
                htmlString +=  '<a class="link_detail" href="News_Detail.html"><article class="news_art_'+ i +' news_art"><h1 class="news_1"><span> <div class="article_date">'+ datum.substring(5,7) +'<br>' + datum.substring(8,10) +'</div></span><div class="article_title">' + titel + '</div></h1><div class="arrow-down"></div></article></a>'
                console.log(data.data[i].name);
                $('.content_news').append(htmlString);
                $('.news_art_'+i).css('background-image','url(' + image + ')');

            }*/
            
            
            
            //$('.article_date').html(datum.substring(5,7) + '<br>' + datum.substring(8,10));
            //$('.news_art_1').css('background-image','url(' + image + ')');
            /*$('.titleWrap h2').text(titel);
            $('.overImage h4').text(datum.substring(5,10));
            $('.intro').text(intro);
            $('.textWrap p:not(.intro)').text(bericht);
            $('.imageWrap').css('background-image','url(' + pic +')');
            $('sluitWrap a').css('href', 'href:"' + link + '"');*/
        }
    });

});