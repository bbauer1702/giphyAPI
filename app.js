
$(document).ready(function() {
    var input;


    $('#subButton').on('click', function() {
      input = $("#inputText").val();
      input.replace("/\s/", "+");

        $('.gifList').empty();
        $.ajax({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC'
        }).then(function(response) {
            urlArr = [];
            for (var i = 0; i < response.data.length; i++) {
                urlArr[i] = response.data[i].images.downsized_medium.url;
            }

            var div = $('.gifList');
            $.each(urlArr, function(i, val) {
              $("<img />").attr("src", val).appendTo(div);

            });
        });
    });

});
