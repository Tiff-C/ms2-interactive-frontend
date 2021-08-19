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
  let index = parseInt(num)
  let infoBox = $('#info-detials-hotel');
  infoBox.innerHTML = '';
  let city = $('#city-selector').val();
  let hotels = getHotels(city);
  let hotel = hotels[index];
  
  infoBox.innerHTML = 
  `<h2>${hotel.name}</h2>
  <p>${hotel.info}</p>
  <button><a src="${hotel.url}">Go to hotel website</a></button>`;

  return infoBox;
}


