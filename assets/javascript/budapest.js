var map;
var InforObj = [];
var centerCords = {
    lat: 47.50087,         
    lng: 19.04392
};      


var markersOnMap = [{
    placeName: "Hungarian Parliament",
    LatLng: [{
        lat: 47.50765, 
        lng: 19.04560
    }]
    },
 

{
placeName: "Fishermans Bastion",
LatLng: [{
    lat: 47.50241,
    lng: 19.03476}]
    },


{
placeName: "St Stephen Basilica",
LatLng: [{
        lat: 47.50105,
        lng: 19.05403}]
    },



{
placeName: "Buda Castle",
LatLng: [{
    lat:  47.49635,
    lng:  19.03958}]
    },
        
];

window.onload = function () {
    initMap();
    };

function addMarkerInfo() {
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
        '</h1></div>';

const marker = new google.maps.Marker({
    position: markersOnMap[i].LatLng[0],
    map: map
    });

    const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200
                });

    marker.addListener('click', function () {
        closeOtherInfo();
        infowindow.open(marker.get('map'), marker);
        InforObj[0] = infowindow;
        });
                
     }
    }

function closeOtherInfo() {
    if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
        }
    }

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: centerCords
        });
            addMarkerInfo();
        }