
  let map;

  function initMap() {

    let myLatLng = {};
    
    let city = $('#city-selector').val();
    let hotels = getHotels(city);
    let myLat;
    let myLng;

    for (let hotel of hotels) {
      myLat = hotel.Latitude;
      myLng = hotel.Longitude;
    }

    console.log(typeof(myLat,myLng));

    myLatLng.lat = parseInt(myLat);
    myLatLng.lng = parseInt(myLng);

    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
    });
  }