// Add Google Maps

function initMap(){
    //Map options
    const options = {
        zoom: 6,
        center: {lat: 41.2044,lng: 74.7661}
    }
    // New map
    const map = new 
    google.maps.Map(document.getElementById("map"), options);

    // // Add marker
    // const marker = new google.maps.Marker({
    //     position: {lat:42.4260911, lng:78.219132},
    //     map: map        
    // });

    // // Create info window:
    // const infoWindow = new google.maps.InfoWindow({
    //     content:`<div class="map-description">
    //             <div role="img" class="map-img" src="assets/images/map-jeti-oguz.jpg" alt="Jeti-Oguz mountains in Northern Issuk-Kul"></div>
    //             <h5>Jeti-Oguz</h5>
    //             <p class="infowindow-content">Description 
    //             </p>
    //             </div>`
    // });
    // marker.addListener('click', function(){
    //     infoWindow.open(map, marker);
    // });

    // Create an Array of Markers
        const markers =[
            {
                coords: {lat:42.4260911, lng:78.219132},
       // iconImage: <img class="infowindow-img" src="assets/images/card1.jpg" alt="Jeti-Oguz mountains in Northern Issuk-Kul">
                content: '<h5>Jeti-Oguz</h5>'
            },
            {
                coords: {lat:42.6448, lng:74.4803}
            },
               
        
        ];

        //Loop through markers

        for(const i = 0; i < markers.length; i++) {
            // Add marker
            addMarker(markers[i]);
        }

    // //Jeti-Oguz Gorge
    // addMarker({
    //     coords: {lat:42.4260911, lng:78.219132},
    //    // iconImage: <img class="infowindow-img" src="assets/images/card1.jpg" alt="Jeti-Oguz mountains in Northern Issuk-Kul">
    //     content: '<h5>Jeti-Oguz</h5>'
    
    // }); 


    // addMarker({coords: {lat:42.6448, lng:74.4803}}); // Ala-Archa National Park
    // addMarker({coords: {lat:41.8339, lng:75.1312}}); // Song-Kul Lake
    // addMarker({coords: {lat:42.3732, lng:78.6116}}); // Altin-Arashan valley
    // addMarker({coords: {lat:42.7464, lng:75.2504}}); // Burana Tower
    // addMarker({coords: {lat:42.8746, lng:74.5698}}); // Bishkek
    // addMarker({coords: {lat:40.8308, lng:75.2986}}); // Tash-Rabat Karavanserai
    // addMarker({coords: {lat:40.5140, lng:72.8161}}); // Osh 


    // Add marker Function
    function addMarker(props) {
        const marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        
        });
        if(props.content){
            const infoWindow = new google.maps.InfoWindow({
                content:props.content
            });
        
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }


    }

}