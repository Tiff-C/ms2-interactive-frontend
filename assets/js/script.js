document.addEventListener('DOMContentLoaded', function() {
  

  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(hotelList).click(function() {
      let city = $('#city-selector').val()
      
      let listNumber = hotelList.getAttribute('id');

      let index = listNumber[listNumber.length -1];

      displayHotel(city, index);
      
    });
  };


  displayHotel('london', 0);

})

function getHotels(city) {
  

  let hotels = allHotels.filter(obj => {
    return obj.city === city;
  })
  
  return hotels;
}


function displayHotel(city, index) {
  
  let hotels = getHotels(city)
  let hotelDetails = [];
  let hotelLatLng = {};

  for (let hotel of hotels) {
    let hotelName = hotel.name;
    let hotelInfo = hotel.info;
    let hotelUrl = hotel.url;
    hotelLatLng.lan = hotel.latitude;
    hotelLatLng.lng = hotel.longitude;

    hotelDetails.push(`<h2>${hotelName}</h2>
    <p>${hotelInfo}</p>
    <button class="btn"><a href="${hotelUrl}" target='_blank'>Go to hotel website</a></button>`);

  };

  $('#info-detials-hotel').html(hotelDetails[index]);
  
  displayMapMarker(hotelLatLng)
}

function displayMapMarker(hotelLatLng){
  let marker = new google.maps.Marker({
    position: hotelLatLng,
  }); 

  marker.maps(map);
}


/*
  if (city === undefined) {
    alert('Please select a City');
  } else {
    let hotelName = hotel.name;
    let hotelInfo = hotel.info;
    let hotelUrl = hotel.url;
    
    infoBox.innerHTML = 
    `<h2>${hotelName}</h2>
    <p>${hotelInfo}</p>
    <button><a src="${hotelUrl}">Go to hotel website</a></button>`;

    return ;
  } */