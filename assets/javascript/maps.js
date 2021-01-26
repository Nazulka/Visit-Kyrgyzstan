// Add Google Maps

function initMap(){
    var options = {
        zoom:10,
        center: {lat: 42.8746,lng: -74.5698}
    }
    var map = new
    google.maps.Map(document.getElementById("map"), options);
};