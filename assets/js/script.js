document.addEventListener('DOMContentLoaded', function() {
  let hotelLists = $('.top10-list-item');
  let infoBox = $('.info-details').html()

  for (let hotelList of hotelLists) {
    for (let hotel of hotels) {
      $(hotelList).click(function() {
        infoBox = 
        `<h5>${hotel.name}</h5>
        <p>${hotel.info}</p>
        <button><a src="${hotel.url}">Go to hotel website</a></button>`;
      }); 
    }
  };
}
)

