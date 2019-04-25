var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
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
    zoom: 8
  });


}


function createMarker(number, currentMap, currentMapData) {

  var marker = new MarkerWithLabel({
    position: new google.maps.LatLng(currentMapData[0], currentMapData[1]),
    map: currentMap,
    icon: '/img/sticker/empty.png',
    shadow: '/img/sticker/bubble_shadow.png',
    transparent: '/img/sticker/bubble_transparent.png',
    draggable: false,
    raiseOnDrag: false,
    labelContent: ""+number,
    labelAnchor: new google.maps.Point(3, 30),
    labelClass: "mapIconLabel", // the CSS class for the label
    labelInBackground: false
  });
}