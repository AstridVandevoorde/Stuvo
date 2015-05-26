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
        url: 'http://dtprojecten.ehb.be/~stuvo/public_html/api/nieuws.php',
        data: sendData,
        type: 'POST',
        dataType: 'json',
        error: function (err) {
            console.dir(err);
        },
        success: function (data) {

                var newsID = location.search.split('newsItem=')[1]
                var titel = data.data[newsID].name;
                var image=data.data[newsID].picture;
                var tekst = data.data[newsID].message;
                var link = data.data[newsID].link;
                var fb = data.data[newsID].id;
                console.log(data.data[newsID]);

                $('.news_detail_foto').css('background-image','url('+image+')');
                $('.titel_detail').text(titel);
                $('.tekst_detail').text(tekst);
                if(link){
                    $('.tekst_detail').append('<br>' + '<br>' + '<a href="'+link+'">Ga naar de website</a>');
                }
                if(fb){
                    $('.tekst_detail').append('<br>' + '<br>' + '<a href="http://www.facebook.com/'+fb+'">Ga naar de facebook</a>');

                }
            
        }
    });

});