
"use strict";


var address = "2606 Guadalupe St Austin, TX 78705";
var kerbeyLane = {lat: 30.291221, lng: -97.741532 };
var mapDisplay = document.getElementById('map');
var geocoder;
var options = {
    zoom: 13,
    center: kerbeyLane
};
var map;

function newMarkerFunction(place, icon) {
    var marker = new google.maps.Marker({
        position: place,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: icon
    })
}

function initMap() {
    map = new google.maps.Map(mapDisplay, options);
    var marker = new google.maps.Marker({
        position: kerbeyLane,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
    });

    geocoder = new google.maps.Geocoder();

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
        content: ('<h4>Kerbey Lane Cafe</h4>' +
            '<ul><li>Cinnamon Swirl Pancakes with Blueberry!!!</li><li>Chips and Queso!!</li></ul>')
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var kemuriTatsuYa = {
        address: "2713 E 2nd St, Austin, TX 78702",
        icon: {
            url: "image/002-bruce-lee.svg",
            size: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(45, 45)

        }
    };
    var saltySow = {
        address: "1917 Manor Rd, Austin, TX 78722",
        icon: {
            url: 'image/003-fat.svg',
            size: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(45, 45)
        }
    };
    var perlas = {
        address: "1400 S Congress Ave, Austin, TX 78704",
        icon: {
            url: "image/001-mexican-man.svg",
            size: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(45, 45)

        }
    };


    var restaurantArray = [kemuriTatsuYa,
        saltySow, perlas];

    restaurantArray.forEach(function (e, i) {
        geocoder.geocode({ "address": restaurantArray[i].address}, function(results, status) {
            if(status == "OK") {
                newMarkerFunction(results[0].geometry.location, restaurantArray[i].icon);
            } else {
                console.log('something went horribly, terribly, dramatically wrong XD');
            }
        })
    });

// Open the window using our map and marker
}