let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.509865, lng: -0.118092 },
    zoom: 8,
  });
}

let marker = new google.maps.Marker({
  position: myLatlng,
  title:"Hello World!"
});