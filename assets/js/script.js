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
  let infoBox = $('#info-detials-hotel').html();
  // infoBox.innerHTML = '';
  let city = $('#city-selector').val();
  let hotels = getHotels(city);
  let hotel = hotels[index];
  
  let hotelName = hotel.name;
  let hotelInfo = hotel.info;
  let hotelUrl = hotel.url;
    console.log(infoBox);

  infoBox = 
    `<h2>${hotelName}</h2>
    <p>${hotelInfo}</p>
    <button><a src="${hotelUrl}">Go to hotel website</a></button>`;
  // console.log(infoBox)
  
  // return;
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