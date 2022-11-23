var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {center: {lat: 41.8818, lng: -87.6231}, zoom: 10,})

  var marker = new google.maps.Marker({position: {lat:41.8365,lng:-87.6495}, map:map, animation: google.maps.Animation.BOUNCE});

  var info = new google.maps.InfoWindow({
    content: "<h5>This is my neighborhood</h5>"
  })
  info.open(map,marker)


  const location = [
    {lat:41.8411,lng:-87.6329},
    {lat:41.8300,lng:-87.7000}
  ]

  var line = new google.maps.Polyline({
    path: location,
    strokeColor: "FF0000",
    strokeWeight: 10,
    strokeOpacity: 1.0,
    geodesic: true,
  });
  line.setMap(map);

};

window.initMap=initMap;


