document.addEventListener('DOMContentLoaded', function() {
  

  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(hotelList).click(function() {
      let city = $('#city-selector').val()
      
      let listNumber = hotelList.getAttribute('id');

      let index = listNumber[listNumber.length -1];

      displayHotel(city, index);
      initMap();
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
  
  let hotels = getHotels(city);
  let hotelDetails = [];
  

  for (let hotel of hotels) {
    let hotelName = hotel.name;
    let hotelInfo = hotel.info;
    let hotelUrl = hotel.url;

    hotelDetails.push(`<h2>${hotelName}</h2>
    <p>${hotelInfo}</p>
    <button class="btn"><a href="${hotelUrl}" target='_blank'>Go to hotel website</a></button>`);
    
  };
  
  displayMapMarker(city);
  $('#info-detials-hotel').html(hotelDetails[index]);
  
}

function displayMapMarker(city){
  let hotels = getHotels(city);
    let myLat;
    let myLng;

    for (let hotel of hotels) {
      myLat = hotel.Latitude;
      myLng = hotel.Longitude;
    }

    console.log(typeof(myLat,myLng));

    return myLat, myLng;
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