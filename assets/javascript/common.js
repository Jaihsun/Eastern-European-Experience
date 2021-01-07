window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    /*
    This does xyz....
    */
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
        
        //this does this
        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InforObj[0] = infowindow;
        });
    }
}


function closeOtherInfo() {
    /* detach the info-window from the marker ... undocumented in the API docs */
    if (InforObj.length > 0) {
        // inline comments
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
