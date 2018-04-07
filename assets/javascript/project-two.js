var recommendationCounter = 0;
var numRecommendations;
var queryUrl;
//var categoryCounter = 0;

function runThis(numRecommendations) { }

// var url = "https://api.foursquare.com/v2/search/recommendations?near=" + locationChosen + "&v=20160607&client_id=" + clientID + "&client_secret=" + clientSecret + "";

var locationChosen = "New York, NY";
var clientID = "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50";
var clientSecret = "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI";
var categoryNum = "4d4b7104d754a06370d81259,4d4b7105d754a06372d81259,4d4b7105d754a06373d81259,4d4b7105d754a06374d81259,4d4b7105d754a06376d81259,4d4b7105d754a06377d81259,4d4b7105d754a06375d81259,4e67e38e036454776db1fb3a,4d4b7105d754a06378d81259,4d4b7105d754a06379d81259";
// queryUrl += '?' + $.param({
//     'clientID': "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50",
//     'clientSecret': "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI",


// });

queryUrl = "https://api.foursquare.com/v2/search/recommendations?near=" + locationChosen + "&v=20160607&sortByDistance=1&venuePhotos=1&categoryId=" + categoryNum + "&client_id=" + clientID + "&client_secret=" + clientSecret + "";


// //$("#location").on("click", function () {
//     locationChosen
//         }

$.ajax({
    url: queryUrl,
    method: 'GET',
}).done(function (result) {
    console.log(result);
    console.log(result.response.group.results[0].venue.name);
    console.log(result.response.group.results[0].photo);
    console.log(result.response.group.results[0].venue.categories[0].name);

    $("#recSearch").on("click", function () {
        var userSelection = $("input[type='checkbox']").val();
        //if ($(this).is(':checked')) {
        //userSelection = $("<p>").text(result.response.group.results[j].venue.categories[0].name);
        //userSelection.addClass("selection");
        //userSelection.attr("id" + categoryCounter);
        if (userSelection === "4d4b7104d754a06370d81259") {
            for (var j = 0; j < results.length; j++) {
                
                //categoryCounter++;
                //var userSelection = $("<p>").text(result.response.group.results[j].venue.categories[0].name);
                //userSelection.addClass("selection");
                //userSelection.attr("id" + categoryCounter);
            }
        } else {
            console.log(result);
        }


        for (var i = 0; i <= 9; i++) {

            recommendationCounter++;

            var recommendationSection = $("<p>").text(result.response.group.results[i].venue.name);
            recommendationSection.addClass("recs");
            recommendationSection.attr("id", "article-well-" + recommendationCounter);

        }
        $("#rec-section").append(recommendationSection);
    });

}).fail(function (err) {
    console.log(queryUrl);
    throw err;
});

