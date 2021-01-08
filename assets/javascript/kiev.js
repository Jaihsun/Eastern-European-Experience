var map;
var InforObj = [];
var centerCords = {    
    lat: 50.4551,
    lng: 30.5234
    };

var markersOnMap = [{
placeName: "Kiev (St Michaels Golden Dome)",
LatLng: [{
        lat: 50.45600, 
        lng: 30.52303
            }]
    },
            
    
{placeName: "Saint Sophia's Cathedral",
LatLng: [{
    lat: 50.45311,
    lng: 30.51434
    }]
    },
            
    
{placeName: "Independence Square",
    LatLng: [{
        lat: 50.45069,
        lng: 30.52298
                }]
            },


{placeName: "St. Andrew's Church",
    LatLng: [{
        lat: 50.45919,
        lng: 30.51794
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
        zoom: 14,
        center: centerCords
    });
        addMarkerInfo();
}


