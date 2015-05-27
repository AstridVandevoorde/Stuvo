$(document).ready(function () {
    var sendData = {
        url: 'api/nieuws.php'
    };
    $.ajax({
        url: 'http://dtprojecten.ehb.be/~stuvo/public_html/api/nieuws.php',
        data: sendData,
        type: 'POST',
        dataType: 'json',
        error: function (err) {
            console.dir(err);
        },
        success: function (data) {
            var firstTimeNieuws = localStorage.getItem('firstTimeNieuws');
            console.log("test: " + firstTimeNieuws);
            if(firstTimeNieuws == null){

                $(".overlay").fadeToggle("fast");
            }
             $(".close").click(function () {
                $(".overlay").fadeToggle("fast");
                firstTimeNieuws == false;
                localStorage.setItem('firstTimeNieuws', JSON.stringify(firstTimeNieuws));

            });

            
            var arrayMax = data.data.length;
            for(var i=0;i<arrayMax;i++){
                var htmlString = '';
                var titel = data.data[i].name;
                var datum = data.data[i].created_time;
                var image=data.data[i].picture;
                //console.log(i);
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
                htmlString +=  '<a class="link_detail" href="News_Detail.html?newsItem='+ i +'"><article class="news_art_'+ i +' news_art"><h1 class="news_1"><span> <div class="article_date">'+ datum.substring(5,7) +'<br>' + datum.substring(8,10) +'</div></span><div class="article_title">' + titel + '</div></h1><div class="arrow-down"></div></article></a>'
                //console.log(data.data[i].name);
                $('.content_news').append(htmlString);
                $('.news_art_'+i).css('background-image','url(' + image + ')');

            }
        }
    });

});