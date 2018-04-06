var recommendationCounter = 0;
var numRecommendations;
var queryUrl;

function runThis(numRecommendations) {}

// var url = "https://api.foursquare.com/v2/search/recommendations?near=" + locationChosen + "&v=20160607&client_id=" + clientID + "&client_secret=" + clientSecret + "";

var locationChosen = "New York, NY";
var clientID =  "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50"
var clientSecret = "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI"

// queryUrl += '?' + $.param({
//     'clientID': "Y0THHOXVAO3E2J32CKEOXSGYSZ2ACS4NZU5J4ABSYVOS5I50",
//     'clientSecret': "JZGTVKXP4H3E4IROULCOUJR4KBOXRY24TCZ4QS0DILORD3RI",


// });

queryUrl = "https://api.foursquare.com/v2/search/recommendations?near=" + locationChosen + "&v=20160607&client_id=" + clientID + "&client_secret=" + clientSecret + "";

$.ajax({
    url: queryUrl,
    method: 'GET',
}).done(function (result) {
    console.log(result);

    for (var i = 0; i < numRecommendations; i++) {

        recommendationCounter++;

        var recSection = $("<div>");
        recSection.addClass("rec");
        recSection.attr("id", "article-rec-" + recommendationCounter);
        $("#rec-section").append(recSection);
    }






}).fail(function (err) {
    console.log(queryUrl);
    throw err;
});