// Add Google Maps

function initMap(){
    //Map options
    const options = {
        zoom: 7,
        center: {lat: 41.2044,lng: 74.7661}
    }
    // New map
    const map = new 
    google.maps.Map(document.getElementById("map"), options);


    // Create an Array of Markers
        const markers =[
            {
                coords: {lat:42.4260911, lng:78.219132}, //Jeti-Oguz Gorge    
                content: '<h5>Jeti-Oguz Gorge</h5>',
                info: '<h5>Jeti-Oguz Gorge</h5>'
            },
            {
                coords: {lat:42.6448, lng:74.4803}, // Ala-Archa National Park
                content: '<h5>Ala-Archa National Park</h5>',
                info: '<h5>Ala-Archa National Park</h5>'
            },
            {
                coords: {lat:41.8339, lng:75.1312}, // Song-Kul Lake
                content: '<h5>Song-Kul Lake</h5>',
                info: '<h5>Song-Kul Lake</h5>'
            },
            {
                coords: {lat:42.3732, lng:78.6116}, // Altin-Arashan valley
                content: '<h5>Altin-Arashan valley</h5>',
                info: '<h5>Altin-Arashan valley</h5>'
            },
            {
                coords: {lat:42.7464, lng:75.2504}, // Burana Tower
                content: '<h5>Altin-Arashan valley</h5>',
                info: '<h5>Altin-Arashan valley</h5>'
            },
            {
                coords: {lat:42.8746, lng:74.5698}, // Bishkek
                content: '<h5>Bishkek</h5>',
                info: '<h5>Bishkek</h5>'
            },
            {
                coords: {lat:40.8308, lng:75.2986}, // Tash-Rabat Karavanserai
                content: '<h5>Tash-Rabat Karavanserai</h5>',
                info: '<h5>Tash-Rabat Karavanserai</h5>'
            },
            {
                coords: {lat:40.5140, lng:72.8161}, // Osh
                content: '<h5>Osh</h5>',
                info: '<h5>Osh</h5>'
            

            }  
        ];

        //Loop through markers
        for(var i = 0; i < markers.length; i++) {
            // Add marker
            addMarker(markers[i]);
        }



      
    // Add marker Function
    function addMarker(props) {
        const marker = new google.maps.Marker({
        position: props.coords,
        map: map,        
        });

        if(props.content){
            const infowindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('mouseover', function(){
                infowindow.open(map, marker);
             //   document.getElementById("sidebar").innerHTML = marker.info;
    
            google.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
                });
            }); 
            
           google.maps.event.addListener(marker, 'click', (function(i) {
    
            return function() {
           document.getElementById("sidebar").innerHTML = markers[i].info;
                }
            })(i));

        }        
    }  
}

