var zombie_map;
var old_position;
var all_markers = []
var data = `51.90769026213801 -2.068905830383301 zombie.png
    51.91174087287536 -2.0681333541870117 hospital.png
    51.91054955470073 -2.0736265182495117 weapons.png
    51.909305255309874 -2.0733261108398438 weapons.png
    51.91070839895001 -2.077016830444336 weapons.png
    51.90954352807475 -2.0659875869750977 weapons.png`;
var markers = data.split("\n");
function initMap() {
    var emoji = document.getElementById('icon_to_use')
    zombie_map = new google.maps.Map(document.getElementById('zombie_map'), {
        center: {lat: 20.888203, lng: 106.6033584},
        zoom: 10,
    })
    if(navigator.geolocation) {
        navigator.geolocation.watchPosition(set_my_position);
    }
    else {
        alert("Geolocation doesn't work in your browser");
    }


    // Add your code here
    for (i=0; i = all_markers.length; i++) {
        var marker_data = markers[i].trim();
        marker_data = marker_data.split(" ");
        var marker_position = new google.maps.LatLng(marker_data[0], marker_data[1]);
        var marker = new google.maps.Marker({
            position: marker_position,
            map: zombie_map,
            icon: emoji
        })
        all_markers.push(marker);
    }

    old_position = new google.maps.Marker({
        position: {lat: 20.888203, lng: 106.6033584},
        map: zombie_map
    })
}

function set_my_position(position) {
    old_position.setMap(null);
    var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var marker = new google.maps.Marker({
        position: pos,
        map: zombie_map,
        zoom: 10,
        icon: "player.png"
    })
    old_position = marker;
}
