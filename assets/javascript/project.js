var map;
var locationChosen;
var geocoder;



function initMap() {
    
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
        zoom: 12,
        center: latlng
    }
    geocoder = new google.maps.Geocoder()
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $("#location").on("click", function () {
    geocodeAddress(geocoder, map)
    });
}

function geocodeAddress(geocoder, resultsMap) {
    address = $("#locationSelected").val();
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  




//})