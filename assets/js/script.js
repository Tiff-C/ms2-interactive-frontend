document.addEventListener('DOMContentLoaded', function() {
  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(hotelList).click(function() {
      
      let listNumber = hotelList.getAttribute('id');

      let index = listNumber[listNumber.length -1];

      displayHotel(index);
      
    });
  };
})

function getHotels(city) {
  let hotels = allHotels.filter(obj => {
    return obj.city === city;
  })
  
  return hotels;
}

function displayHotel(num) {

  let city = $('#city-selector').val();
  let hotels = getHotels(city);
  let hotel = hotels[num];
  
  let hotelName = hotel.name;
  let hotelInfo = hotel.info;
  let hotelUrl = hotel.url;

  $('#info-detials-hotel').html(`<h2>${hotelName}</h2>
  <p>${hotelInfo}</p>
  <button><a src="${hotelUrl}">Go to hotel website</a></button>`);
  
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