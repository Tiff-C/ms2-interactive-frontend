document.addEventListener('DOMContentLoaded', function() {
  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(hotelList).click(function() {
      
      let listNumber = hotelList.getAttribute('id');

      let index = listNumber[listNumber.length -1];

      displayHotel(index);
      /*
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
      }*/
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
  console.log(infoBox);
}





/*
space for code that will go into another function:
function citySelector() {

  let city = $('#city-selector').val();

  if (city === 'london') {
    getHotels(london);
    console.log('Selected City: ' + city);
  } else if (city === 'edinburgh') {
    getHotels(edinburgh);
    console.log('Selected City: ' + city);
  } else if (city === 'bath') {
    getHotels(bath);
    console.log('Selected City: ' + city);
  } else if (city === 'brighton') {
    getHotels(brighton);
    console.log('Selected City: ' + city);
  } else if (city === 'bristol') {
    getHotels(bristol);
    console.log('Selected City: ' + city);
  } else if (city === 'cardiff') {
    getHotels(cardiff);
    console.log('Selected City: ' + city);
  } 
}

*/