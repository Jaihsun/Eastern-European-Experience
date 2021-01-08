var map;
var InforObj = [];
var centerCords = {
    lat: 50.06303,         
    lng: 19.94137
};     
        
var markersOnMap = [{
    placeName: "St Florian's Gate",
    LatLng: [{
        lat: 50.06503, 
        lng: 19.94137
                }]
            },

{   placeName: "Cloth Hall",
    LatLng: [{
        lat: 50.06181,
        lng: 19.93742
                }]
    },

{   placeName: "St Marys Basilica",
    LatLng: [{
        lat: 50.06180,
        lng: 19.93940
    }]
    },

{   placeName: "Old Town",
    LatLng: [{
        lat: 50.05918,
        lng: 19.93739
                }]
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
    zoom: 15,
    center: centerCords
});
        addMarkerInfo();
        }
        

