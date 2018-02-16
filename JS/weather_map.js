
"use strict";

function updateWeather(location) {
    var apiSrc = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "7a05cbf2964e46a552dd921848acfa75",
        lat: location.lat,
        lon: location.lng,
        units: "imperial"
    });

    apiSrc.done(function (data, status, p) {
        console.log(data);

        $('#city-name').text(data.city.name);

        $('#day1').html('');
        $('#day2').html('');
        $('#day3').html('');

        for(var i = 0; i < 24; i += 8) {

            var value = data.list[i];

            var dayofWeeknum = new Date( value.dt_txt ).getDay();

            var days = ["Sun's Day", "Mani's Day", "Tyr's Day", "Woden's Day", "Thor's Day", "Frigg's Day", "Saturn's Day"];

            var html = "";
            html += "<h1>" + days[dayofWeeknum] + "</h1>";
            html += "<br>";
            html += "<h3>" + "Average: " + value.main.temp + "°F" + "</h3>";
            html += "<h4>" + "High: " +  value.main.temp_max + "°F" + "</h4>";
            html += "<h4>" + "Low: " +  value.main.temp_min + "°F" + "</h4>";
            html += "<br>";
            html += "<h6>" + "Humidity: " +  value.main.humidity + "%" + "</h6>";
            html += "<h6>" + "Wind: " +  value.wind.speed + " mph" + "</h6>";
            html += "<h6>" +  value.weather[0].main + ": " + value.weather[0].description + "</h6>";
            html += "<h6>" + "Pressure: " +  value.main.pressure + "</h6>";


            if (i == 0) {
                $('#day1').append(html);
            } else if (i == 8) {
                $('#day2').append(html);
            } else if (i == 16) {
                $('#day3').append(html);
            }

        }
    });
}



var mapDisplay = document.getElementById('map');
var options = {
    zoom: 9,
    center: {
        lat: 29.4260,
        lng: -98.4861
    },
    styles: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#523735"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9b2a6"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dcd2be"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae9e90"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#93817c"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a5b076"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#447530"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f1e6"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fdfcf8"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f8c967"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e9bc62"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e98d58"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#db8555"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#806b63"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8f7d77"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ebe3cd"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#b9d3c2"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#92998d"
                }
            ]
        }
    ]
};

var map = new google.maps.Map(mapDisplay, options);

var geocoder = new google.maps.Geocoder();

$('#input-field').change(function () {

    console.log($(this)[0].value);

    geocoder.geocode({ "address": $(this)[0].value }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

            updateWeather(results[0].geometry.location);

            map.setCenter(results[0].geometry.location);

        } else {

            alert("Geocoding was not successful - STATUS: " + status);
        }
    });

});

