
"use strict";

var address = "2606 Guadalupe St Austin, TX 78705";
var kerbeyLane = {lat: 30.291221, lng: -97.741532 };
var mapDisplay = document.getElementById('map');
var options = {
    zoom: 17,
    center: kerbeyLane
};

function initMap() {
    var map = new google.maps.Map(mapDisplay, options);
    var marker = new google.maps.Marker({
        position: kerbeyLane,
        map: map,
        draggable: true
    });

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ "address": address }, function(results, status) {

        // Check for a successful result
        if (status == 'OK') {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);
            console.log(results[0]);
            // addLocationMarker(results[0].geometry.location, mapDisplay);

        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Kerbey Lane Cafe!"
    });

// Open the window using our map and marker
    infowindow.open(map, marker);
}