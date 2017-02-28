    //basic show info
    $('#show').append("<h1 class =\"hide-headline\">" + selectShow.Title + "</h1><p><span class=\"info-label\">Air Date:</span> " + selectShow.Year + "</p><p><span class=\"info-label\">Actors/Actresses:</span> " + selectShow.Actors + "</p><p><span class=\"info-label\">Writers:</span> " + selectShow.Writer + "</p>");
    $('#season').append("<h2>Season: " + input.Season + "</h2>");

    
    //loop through the episodeList array to create divs for innerhtml
    for(var i = 0;i < episodeList.length; i++){
      //create variables for divs
      var textBlock1 = "<div class=\"episode-container row\"><div class=\"crop col-sm-4 col-md-3 col-lg-3\" >"; //open the row and 1st column
       var textBlock2 = "</div><div class=\"col-sm-8 col-md-9 col-lg-9\"><div class=\"row episode-header\"><div class=\"col-md-9\">"
       var textBlock3 = "</div><div class=\"col-md-3\">";
       var textBlock4 = "</div></div><div>";
       var textBlock5 = "</div></div></div>";

       //set poster image to generic if Not Available
       if (episodeList[i].Poster == "N/A"){
         episodeList[i].Poster = "img/bobs-filler-image.jpg";
        
       }
      
      var episodeNumber = Number([i]) + 1;
      var episodeDate = episodeList[i].Released;
      var dateArray = episodeDate.split(" ");
      var ratingVar = episodeList[i].imdbRating * 10;
      var badOutput1 = "<img class=\"episode-image\" src=\"" + episodeList[i].Poster + "\" alt=\"Episode " + episodeNumber + "\">";
      var badOutput2 = "<h3 class=\"episode-title\">" + episodeNumber + ": " + episodeList[i].Title + "</h3>";
      var badOutput3 = "<p class=\"episode-date\">" + dateArray[1] + " " + dateArray[0] + ", " + dateArray[2] + "</p>";
      var badOutput4 = "<p class=\"episode-plot\">" + episodeList[i].Plot + "</p>";
      var badOutput5 = "<p class=\"episode-rating\">IMDB Rating: <div class=\"rating-container\"><div class=\"stars\" style=\"width:" + ratingVar + "px;\"></div></div></p>";

      //tac onto episodes
      $('#episodes').append(textBlock1 + badOutput1 + textBlock2 + badOutput2 + textBlock3 + badOutput3 + textBlock4 + badOutput4 + badOutput5 + textBlock5);
  }