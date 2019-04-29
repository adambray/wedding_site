var map;

function initMap() {
    const reception = {
        location: {lat:  38.906330, lng: -77.023811},
        title: "Ceremony and Reception",
        popupContent: '<h4>Ceremony and Reception</h4>'
    };

    const brunch = {
        location: {lat:  38.879125, lng: -77.005319 },
        title: "Sunday Brunch",
        popupContent: '<h4>Sunday Brunch</h4>'
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:  38.895296, lng: -77.016018 },
        styles: [
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ],
        zoom: 13
    });

    const receptionInfoWindow = new google.maps.InfoWindow({
        content: reception.popupContent,
    });

    const receptionMarker = new google.maps.Marker({
        position: reception.location,
        map: map,
        title: 'Reception'
    });

    receptionMarker.addListener('click', function () {
        receptionInfoWindow.open(map, receptionMarker);
    });

    const brunchInfoWindow = new google.maps.InfoWindow({
        content: brunch.popupContent,
    });

    const brunchMarker = new google.maps.Marker({
        position: brunch.location,
        map: map,
        title: 'Reception'
    });

    brunchMarker.addListener('click', function () {
        brunchInfoWindow.open(map, brunchMarker);
    });
}

