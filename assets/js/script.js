document.addEventListener('DOMContentLoaded', function() {
  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(hotelList).click(function() {
      if (hotelList.getAttribute('id') === 'hotel-1') {
        displayHotel(0);
        console.log('you clicked hotel 1');
      } else if (hotelList.getAttribute('id') === 'hotel-2') {
        displayHotel(1);
        console.log('you clicked hotel 2');
      } else if (hotelList.getAttribute('id') === 'hotel-3') {
        displayHotel(2);
        console.log('you clicked hotel 3');
      } else if (hotelList.getAttribute('id') === 'hotel-4') {
        displayHotel(3);
        console.log('you clicked hotel 4');
      } else if (hotelList.getAttribute('id') === 'hotel-5') {
        displayHotel(4);
        console.log('you clicked hotel 5');
      } else if (hotelList.getAttribute('id') === 'hotel-6') {
        displayHotel(5);
        console.log('you clicked hotel 6');
      } else if (hotelList.getAttribute('id') === 'hotel-7') {
        displayHotel(6);
        console.log('you clicked hotel 7');
      } else if (hotelList.getAttribute('id') === 'hotel-8') {
        displayHotel(7);
        console.log('you clicked hotel 8');
      } else if (hotelList.getAttribute('id') === 'hotel-9') {
        displayHotel(8);
        console.log('you clicked hotel 9');
      } else if (hotelList.getAttribute('id') === 'hotel-10') {
        displayHotel(9);
        console.log('you clicked hotel 10');
      }
    });
  };
})

function displayHotel(num) {
  console.log('index: ' + num);
}

function citySelector() {
  let city = $('#city-selector').val();

  if (city === 'london') {
    getLondonHotels();
    console.log('Selected City: ' + city);
  };
}

function getLondonHotels() {
  let londonHotels = [];

  for (let hotel of hotels) {
    if (hotel.city === 'london') {
      londonHotels.push(hotel);
    };
  };

  console.log(londonHotels);
}


/*
space for code that will go into another function:

let infoBox = $('.info-details').html()


$(hotelList).click(function() {
  infoBox = 
  `<h5>${hotel.name}</h5>
  <p>${hotel.info}</p>
  <button><a src="${hotel.url}">Go to hotel website</a></button>`;
}); 
*/