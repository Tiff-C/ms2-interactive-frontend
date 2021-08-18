document.addEventListener('DOMContentLoaded', function() {
  let hotelLists = $('.top10-list-item');

  for (let hotelList of hotelLists) {
    $(this).click(function() {
      if (hotelList.html() === 'Hotel 1') {
        displayHotel(0);
      } else if (hotelList.html() === 'Hotel 2') {
        displayHotel(1);
      } else if (hotelList.html() === 'Hotel 3') {
        displayHotel(2);
      } else if (hotelList.html() === 'Hotel 4') {
        displayHotel(3);
      } else if (hotelList.html() === 'Hotel 5') {
        displayHotel(4);
      } else if (hotelList.html() === 'Hotel 6') {
        displayHotel(5);
      } else if (hotelList.html() === 'Hotel 7') {
        displayHotel(6);
      } else if (hotelList.html() === 'Hotel 8') {
        displayHotel(7);
      } else if (hotelList.html() === 'Hotel 9') {
        displayHotel(8);
      } else if (hotelList.html() === 'Hotel 10') {
        displayHotel(9);
      }
    })
  };
})




/*
space for code that will go into another function:

let infoBox = $('.info-details').html()

for (let hotel of hotels) {
      $(hotelList).click(function() {
        infoBox = 
        `<h5>${hotel.name}</h5>
        <p>${hotel.info}</p>
        <button><a src="${hotel.url}">Go to hotel website</a></button>`;
      }); 
    }
*/