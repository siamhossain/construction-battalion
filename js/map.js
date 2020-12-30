function initMap() {
    var uluru = {lat: 23.755796, lng: 90.376635};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
    }