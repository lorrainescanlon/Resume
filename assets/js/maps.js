function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        },
        mapId: "fa2e06171d1ba8a4",
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 40.785091, lng: -73.968285},
        {lat: 41.084045, lng: -73.874245},
        {lat: 40.754932, lng: -73.984016}
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.marker.AdvancedMarkerElement({
            map,
            position: location,
            title: labels[i % labels.length]
        });
    });

    var markerCluster = new markerCluster.MarkerClusterer({markers, map});
};