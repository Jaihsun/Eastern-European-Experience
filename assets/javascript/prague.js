var map;
var InforObj = [];
var centerCords = {
    
            zoom: 50,
            lat: 50.08900,         
            lng: 14.41141
        };
   

        var markersOnMap = [{
                placeName: "Prague Castle",
                LatLng: [{
                    lat: 50.09150, 
                    lng: 14.40151
                }]
            },
            {

                placeName: "Astronomical Clock",
                LatLng: [{
                    lat: 50.08770,
                    lng: 14.42079
                }]
            },
            {
                placeName: "Victorious Curch",
                LatLng: [{
                    lat: 50.08612,
                    lng: 14.40337
                }]
            },
            {
                placeName: "Charles Bridge",
                LatLng: [{
                    lat: 50.08675,
                    lng: 14.41141
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


