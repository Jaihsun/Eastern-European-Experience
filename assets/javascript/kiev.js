let map;
let InforObj = [];
const centerCords = {    
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
            {

                placeName: "Saint Sophia's Cathedral",
                LatLng: [{
                    lat: 50.45311,
                    lng: 30.51434
                }]
            },
            {
                placeName: "Independence Square",
                LatLng: [{
                    lat: 50.45069,
                    lng: 30.52298
                }]
            },
            {
                placeName: "St. Andrew's Church",
                LatLng: [{
                    lat: 50.45919,
                    lng: 30.51794
                }]
            },
        
        ];

        
$("first").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
