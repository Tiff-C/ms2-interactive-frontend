
  let map;

  function initMap() {
    let city = $('#city-selector').val();
    displayMapMarker(city);
    let myLatLng = { lat , lng };
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
    });
  }