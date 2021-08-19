let allHotels = [
  {
    "city": "london",
    "name": "The Resident Covent Garden",
    "Latitude": 51.509939,
    "Longitude": -0.123542,
    "url": "https://www.residenthotels.com/the-resident-covent-garden/",
    "info": "The Resident Covent Garden is located overlooking the iconic Strand, in the heart of London's Covent Garden, within a 5 minute walk of both Covent Garden and Charing Cross stations. Just moments from the area's picturesque Italianate Piazza, it is your perfect base from which to discover one of London's most enchanting neighbourhoods and the wider city beyond."
  },
  {
    "city": "london",
    "name": "Hotel 41",
    "Latitude": 51.498435,
    "Longitude": -0.143191,
    "url": "https://41hotel.com/",
    "info": "Our residents-only hotel, with a prestigious Forbes Five-Star rating, has been recognised as the number one hotel in the UK for more than a decade.\nArrive at our private entrance overlooking the Royal Mews of Buckingham Palace, imbued with the subtle fragrance of Hotel 41’s own signature scent, and be welcomed with a personal check-in and a glass from our beautiful Champagne trolley. In your bedroom or suite, discover a selection of homemade treats created by our Executive Chef, along with a supremely comfortable, handcrafted Savoir bed. An unforgettable experience begins..."
  },
  {
    "city": "london",
    "name": "Great Scotland Yard",
    "Latitude": 51.506477,
    "Longitude": -0.126364,
    "url": "https://www.hyatt.com/en-US/hotel/england-united-kingdom/great-scotland-yard/lhrub",
    "info": "Five star luxury hotel, located a stone’s throw away from Covent Garden. Great Scotland Yard is one of London’s most historic and cherished buildings that holds more hidden stories than any other kind in London. Where tradition and history meets modern luxury. One of a Kind. Stay in an 1820’s Grade II listed building with Edwardian & Victorian architecture, featuring 152 guest rooms including eight Suites and one Standalone Townhouse. Enjoy a unique and quintessentially quirky twist on a British classic, where no two rooms are the same—with stunning Mary Poppins views of London."
  },
  {
    "city": "london",
    "name": "The Hari",
    "Latitude": 51.497329,
    "Longitude": -0.156288,
    "url": "https://www.thehari.com/london/",
    "info": "Welcome to The Hari, a stylish retreat in the heart of Belgravia, and your new home away from home in London. Designed for those seeking comfort and understated elegance, The Hari is a sanctuary for modern travellers and connoisseurs of luxury.\nBordering the areas of Chelsea, Kensington and Knightsbridge, Harrods is just moments away from The Hari’s Belgravia base. London’s leading attractions can also be found a short walk from the hotel, including Hyde Park, Buckingham Palace, The Royal Albert Hall and more."
  },
  {
    "city": "london",
    "name": "The Egerton House Hotel",
    "Latitude": 51.496989,
    "Longitude": -0.167871,
    "url": "https://egertonhousehotel.com/",
    "info": "Step through an arch of fragrant blooms to discover this enchanting boutique townhouse in the very heart of Knightsbridge, in the Royal Borough of Kensington and Chelsea. With a unique character and beautiful traditional style, enjoy a delicious breakfast, named the best in the UK, experience our whimsical \"Hatter's\" Afternoon Tea by the fire or sip on one of London’s most famous martinis."
  },
  {
    "city": "london",
    "name": "The Milestone Hotel & Residencies",
    "Latitude": 51.501572,
    "Longitude": -0.18672,
    "url": "https://milestonehotel.com",
    "info": "Step into our Grade-II listed Victorian building and discover old world charm, beautiful rich furnishings, exquisite original arts and outstanding cuisine. Instantly recognisable for our striking red-and-white brick façade, The Milestone is a true London landmark. Just a short stroll from the legendary Royal Albert Hall, as well as Notting Hill and Knightsbridge, our leafy surroundings are perfect for a beautiful picnic in the park."
  },
  {
    "city": "london",
    "name": "The Montcalm London Marble Arch",
    "Latitude": 51.515052,
    "Longitude": -0.159075,
    "url": "https://montcalm.co.uk/",
    "info": "Sitting grandly at the top of Park Lane, within close proximity to London's most exclusive addresses including Mayfair, Oxford and Regent Streets, Marylebone, Edgware Road and Hyde Park is The Montcalm London Marble Arch.\nAt The Montcalm London Marble Arch, the magnificent décor and the contemporary design of the lobby welcomes you to an experience to remember. The hotel features 153 bedrooms including 14 lavish suites. Our rooms are tastefully designed with an emphasis on comfort and style. Chic and contemporary, the bedrooms come complete with state of the art amenities including complimentary broadband and Wi-Fi, LCD TV with international and satellite channels, pillow menu and in-room aroma choices for a memorable stay."
  },
  {
    "city": "london",
    "name": "Royal Lancaster London",
    "Latitude": 51.512195,
    "Longitude": -0.175331,
    "url": "https://www.royallancaster.com",
    "info": "Royal Lancaster London is Hyde Park’s commanding mid-century architectural icon born and built in the swinging 60s. Our happy history has seen us hip, handsome and rolling with the times in our unrivalled London location. Today, here in the 21st century we’re proud of the knowledge and expertise we’ve gained over half a century as one of London’s leading hotels.\nWe enjoy the liberty of being independent and the opportunity it gives us to express our unique and genuine personality. We take pride in having a conscientious, highly professional and happy team dedicated to delivering outstanding service and ensuring that every guest experience is delightfully memorable. Whether it’s the bees in the hives on our roof, the busy staff in our corridors and kitchens, or every guest that we welcome, ‘we always care’."
  },
  {
    "city": "london",
    "name": "The Stafford London",
    "Latitude": 51.505909,
    "Longitude": -0.14038,
    "url": "https://thestaffordlondon.com/",
    "info": "Located in the heart of historic St James’s, minutes from royal parks and palaces, The Stafford London offers world-class accommodation at one of London’s most prestigious addresses. Boasting three unique buildings, each with their own style and character, guests experience timeless luxury, combined with contemporary sophistication and impeccable service."
  },
  {
    "city": "london",
    "name": "One Aldwych",
    "Latitude": 51.511923,
    "Longitude": -0.119411,
    "url": "https://www.onealdwych.com/",
    "info": "An address in London’s beating heart; One Aldwych is located in Covent Garden at the centre\nof culture and theatre. Our unique neighbourhood, with its elegant piazza and cobbled alleyways, is a foodie destination, a theatre lovers paradise and the gateway to the very best of London. \nA place for people who don’t do generic, One Aldwych is one of London’s finest, independent hotels."
  },
  {
    "city": "edinburgh",
    "name": "Fingal",
    "Latitude": 55.979843,
    "Longitude": -3.169277,
    "url": "https://www.fingal.co.uk/",
    "info": "We would love to welcome you aboard Fingal, a luxury floating hotel permanently berthed on Edinburgh’s vibrant waterfront, only 2 miles from the city centre. Originally a lighthouse tender, Fingal has been transformed into an exquisite 23-cabin boutique hotel and exclusive use venue by the award-winning team at The Royal Yacht Britannia.\n Step aboard and discover a hotel that promises an indulgent customer experience like no other. Sleep in luxurious beds with the finest linen, in the most beautiful handcrafted cabins. The perfect combination for a great night’s sleep"
  },
  {
    "city": "edinburgh",
    "name": "The Raeburn",
    "Latitude": 55.959487,
    "Longitude": -3.214747,
    "url": "https://www.theraeburn.com/",
    "info": "The Raeburn was built in 1832 as an elegant Georgian family home and has now been transformed into an exquisite boutique hotel. Boasting ten bedrooms, bar, dining, library, private dining and outdoor terraces, it is the only one of its kind in the area.\n The luxury, peace and relaxation of the spacious bedrooms offer the most tempting retreat, with classic quality reflected in Egyptian cotton bed sheets and heavyweight fluffy towels and dressing gowns. Bathroom fittings in the finest Victorian style and beautiful furnishings throughout the rooms present a picture of irresistible grace and elegance."
  },
  {
    "city": "edinburgh",
    "name": "CHEVAL OLD TOWN CHAMBERS",
    "Latitude": 55.950157,
    "Longitude": -3.191155,
    "url": "https://www.chevalcollection.com/edinburgh/",
    "info": "Welcome to Cheval Old Town Chambers, a luxury all-apartment Residence located in the heart of Edinburgh’s Old Town situated on the Royal Mile, available to book for any length of stay, from one night, to one year or more.\nThe Residence consists of 75 award-winning apartments, each with its own personality. Collectively they showcase the building’s fascinating history, carefully integrating luxury contemporary furnishings with distinctive architecture. At Cheval Old Town Chambers we offer a range of apartments to suit every requirement, from open plan, one, two and three bedroom apartments all the way to a one-of-a-kind two-bedroom townhouse and two penthouses with spectacular views.\nThe location presents the very best of Edinburgh on your doorstep. You can gaze towards Princes Street and the iconic Scott Monument, or enjoy people watching over the Royal Mile, one of Edinburgh’s most iconic streets.\nAll apartments have fully equipped kitchens and provide all the luxury extras to enhance your stay. The apartments come in a truly versatile range of shapes and sizes, sleeping from one to six guests, united by their central location and excellent service"
  },
  {
    "city": "edinburgh",
    "name": "The Lane Boutique Hotel",
    "Latitude": 55.927746,
    "Longitude": -3.207399,
    "url": "https://www.lanehotel.co.uk/",
    "info": "The Lane is a stylish, boutique hotel situated two miles from Edinburgh city centre in the exclusive Morningside area. This elegant hotel has eleven luxurious bedrooms each with their own individual décor and style.\nThe rooms sit across two exquisite Victorian villas, both built in the 1800s, many of the original features have been restored and the timeless building has been renovated and transformed to ensure our guests have a relaxing and enjoyable stay."
  },
  {
    "city": "edinburgh",
    "name": "Hotel Ceilidh-Donia",
    "Latitude": 55.936214,
    "Longitude": -3.167898,
    "url": "https://www.hotelceilidh-donia.co.uk/en-GB",
    "info": "At the Hotel Ceilidh-Donia, Edinburgh, we offer a great range of facilities, making your visit to Edinburgh as memorable as possible and providing great value for money. We have very friendly staff always on hand to answer our visitors questions.\nThere are seventeen beautifully decorated and comfortable rooms all with modern en-suite facilities. All our rooms are equipped with colour televisions, DVDs, telephone, tea and coffee making facilities, hair dryers and broadband internet connection. Wi-fi also available in public areas.\nThe Hotel Ceilidh-Donia is situated just over 1 mile from the centre of Edinburgh. For those of you travelling by car there are parking spots all over the city centre however we can recommend using the public transport service that runs from Dalkeith Road right into the heart of the city centre every 10 minutes, only taking 10 mins to get you there stress free"
  },
  {
    "city": "edinburgh",
    "name": "Edinburgh Marriott Hotel",
    "Latitude": 55.940109,
    "Longitude": -3.312106,
    "url": "https://www.marriott.co.uk/hotels/travel/edieb-edinburgh-marriott-hotel/",
    "info": "Whether traveling to Edinburgh for work or vacation you’ll enjoy the 4-star comfort and excellent service of the Edinburgh Marriott Hotel. We are ideally located two miles from Edinburgh Airport and only 15 minutes from the historic city centre.\n Complimentary on-site parking and public transport links via bus, tram and rail make it easy to explore the city from our hotel. Our deluxe double/double rooms are perfect for families and our Suites are ideal for anyone who needs extra living space. Relax in our heated indoor pool or maintain your fitness regime in our gym. Start or end your day in Edinburgh in Cast Iron Grill or enjoy light bites and drinks in Brew Bar Lounge with patio garden.\n Edinburgh Zoo and BT Murrayfield Stadium are moments away and Edinburgh Festivals provide plenty of entertainment over summer. Social events and meetings are easy to plan with our expert team, 12 event spaces, and catering and technology services. Plan a memorable visit to Edinburgh and be part of our Marriott family."
  },
  {
    "city": "edinburgh",
    "name": "Wilde Aparthotels by Staycity",
    "Latitude": 55.947173,
    "Longitude": -3.199165,
    "url": "https://www.staycity.com/wilde/edinburgh/grassmarket",
    "info": "Edinburgh’s newest aparthotel is inspired by the brilliant Oscar Wilde and will delight those seeking a home from home that’s rich on charm, personality, style, elegance, creativity, quirkiness and originality. \nThis brand-new 128-room aparthotel in the Scottish capital offers a range of design-led studio, one and two-bedroom apartments, all of which deliver the award-winning Staycity blend of home and hotel, but with lashings of Wilde’s signature style.\nGrassmarket lies in the centre of Edinburgh's historic old town, and is one of the city's liveliest and most picturesque areas. Our prime position at the foot of Edinburgh Castle affords incredible breathtaking views.\n We’re also located within walking distance of The Real Mary King’s Close, the National Museum of Scotland, the Scott Monument and the Scotch Whisky Experience. Furthermore, you’re in easy reach of the city’s best places to shop, eat, drink and dance, including the famous Royal Mile with its many pubs and restaurants, as well as Edinburgh’s chief business districts and transport links."
  },
  {
    "city": "edinburgh",
    "name": "The Chester Residence",
    "Latitude": 55.950526,
    "Longitude": -3.216901,
    "url": "https://www.sacoapartments.com/serviced-apartments/uk/edinburgh/the-chester-residence/",
    "info": "Beautiful, modern one and two bedroom apartments residing in a row of stunning Georgian townhouses in a prime location within Edinburgh’s West End.\nThe Chester Residence is a luxury choice for discerning travellers looking to independently live somewhere a little more elegant whilst staying in Scotland’s capital.\n The stylish apartments offer spacious living areas as well as sleek kitchens, contemporary bathrooms, comfortable bedrooms and not to mention, free Wi-Fi throughout. Neutral colour palettes combined with high-end furnishings and inviting interiors make The Chester Residence an excellent alternative to a regular hotel.\nThis property is situated within Edinburgh’s vibrant New Town, just a short distance from popular landmarks Edinburgh Castle and the Royal Mile. This convenient central location is perfect for business travellers wanting to explore the city in between meetings, or leisure guests simply looking to soak up the culture of their surroundings.\n All of the main attractions are within close proximity, but there is a bus stop nearby and Edinburgh’s main rail station is less than a mile away if you’re exploring further afield."
  },
  {
    "city": "edinburgh",
    "name": "Market Street hotel",
    "Latitude": 55.950941,
    "Longitude": -3.189978,
    "url": "https://www.marketstreethotel.co.uk/",
    "info": "Drawn from the brutal beauty of Edinburgh itself, Market Street hotel combines bold design and distinct comfort to boast the city’s newest urban escape. Primely placed in the epicentre of Edinburgh. It’s ideally situated to discover your own path as you explore our enchanting city.\nEnjoy rooftop views across the city and take in Edinburgh’s iconic landmarks from our private outdoor terraces. Located in a sheltered position, nestled into the roofscape of the Old Town itself, offering you the feeling of being both surrounded by the city whilst soaring above it at the same time.\nStep into one of our guest rooms to find a modern-day ‘fortress,’ where you'll be met with a sense of tranquillity, coupled with a vibrant and welcoming atmosphere, designed to leave a lasting impression on today’s intrepid traveller. Go at your own pace, head straight out to explore the city or linger a little longer on the world’s most comfortable bed"
  },
  {
    "city": "edinburgh",
    "name": "Prestonfield House",
    "Latitude": 55.936557,
    "Longitude": -3.157247,
    "url": "https://www.prestonfield.com/",
    "info": "Opulence, theatre and luxury are combined in this unique 5-star hotel in one of Edinburgh's finest historic buildings. Just five minutes from Edinburgh city centre, James Thomson's Prestonfield House is Edinburgh's most exclusive luxury hotel, offering the privacy and seclusion of a country estate right in the heart of Edinburgh.\n60 years after Prestonfield House changed from a private home to a luxury hotel, it remains one of the most recognisable 5 Star hotels in Scotland. Situated within 20 acres of gardens and located next to the stunning Arthur's Seat, you wouldn't know we're only five minutes from the bustling life of Edinburgh’s city centre.\nStep inside Prestonfield House with its unique rooms, distinguished heritage, and true 5-star atmosphere. No room is alike, each room features unique antique furniture such as a comfortable seating area, a desk, a collection of antiques and characterful feature beds dressed with fine linens and piled high with cushions.\n If you're in Edinburgh, join us for an indulgent afternoon tea in the most wonderful setting in the city."
  },
  {
    "city": "bath",
    "name": "Dukes Bath",
    "Latitude": 51.384339,
    "Longitude": -2.353923,
    "url": "https://www.dukesbath.co.uk/",
    "info": "At Dukes | Bath we offer our guests the chance to stay at one of the city’s most prestigious street addresses. This beautiful boutique 17 bedroom Guest House occupies two magnificent Georgian Townhouses on Great Pulteney Street, one of the finest boulevards in England.\nDukes | Bath specialises in exceptional service and a sensational breakfast. Known more simply as ‘Dukes’, it is our reputation and emphasis on service and unforced hospitality, towards all guests, that rests at the heart of this wonderful property.\nWhether it is the high ceilings, sash windows or hand crafted Sanitan bathroom suites, each of our rooms uniquely reflects an era of craftsmanship, Georgian elegance and charm.\n We provide accommodation in relaxed and comfortable surroundings and our 17 guest rooms include a choice of Snug Doubles, Standard Doubles, Superior Doubles, Deluxe Suites or sumptuous Four Poster rooms."
  },
  {
    "city": "bath",
    "name": "The Roseate Villa",
    "Latitude": 51.386812,
    "Longitude": -2.35555,
    "url": "https://www.roseatehotels.com/bath/theroseatevilla/",
    "info": "The Roseate Villa Bath encompasses 2 converted Victorian houses which have had a characterful legacy. A warm welcome with tea and cakes, exemplary service, attention to detail and a genuine connection with every guest makes their experience a very memorable one.\nThe Roseate offers undivided attention to its guests with everything that the city has to offer whether it is the tour of the Roman Baths and Regency Crescent or the views of Prior Park, Jane Austen Museum and the grandeur of Bath Abbey. A boutique hotel positioned just five minutes away from the heart of the city,\n The Roseate Villa Bath exudes a feeling of serenity in and around its estate and offers wholehearted assistance to its guests who are either seeking informative excursions around the city or are in the mood for a nonchalant weekend getaway."
  },
  {
    "city": "bath",
    "name": "Bathen House",
    "Latitude": 51.387991,
    "Longitude": -2.394505,
    "url": "https://www.bathenhouse.co.uk/",
    "info": "Bathen House is pleased to extend you a warm welcome to one of the city's most luxurious and tranquil venues. \nHaving recently undergone extensive redevelopment, our Edwardian property now offers an enticing range of elegant rooms and suites to help transport you to the sumptuous and relaxing haven you deserve.\nGuests can enjoy stylish and spacious bathrooms, a full range of bespoke bedroom furnishings, a large and relaxing communal lounge, a comfortable orangery dining room, as well as an enticing range of outstanding food & beverage.\nIf you have an enquiry of any kind then we will be more than happy to assist you!"
  },
  {
    "city": "bath",
    "name": "Hotel Indigo",
    "Latitude": 51.380196,
    "Longitude": -2.356204,
    "url": "https://bath.hotelindigo.com/",
    "info": "Set in a beautiful honey coloured Georgian terrace is the boutique Hotel Indigo Bath.\nGrade one listed our building is steeped in history and sits in the peaceful street of South Parade, yet you are just steps away from the centre of Bath. Surrounded by culture Bath is famous for romance, literature and historic architecture; our boutique hotel is a great base to explore this wonderful city.\nOur 166 rooms have been perfectly designed with you and the city in mind. Modern and stylish they reflect the influences of the architects and novelists who made Bath famous for its storytelling and passionate social scene.\nJust a stone’s throw away from the Bath Abbey, Roman Baths and Pulteney Bridge, guests can explore the historic sights whilst enjoying the modern day inspirational galleries, street performers, and fantastic array of individual shops. Let us inspire you to walk along the wide Georgian streets made for carriages up to The Royal Crescent. \nAfter exploring take a relaxing dip in the hot spa waters of the original Roman Baths which give Bath its UNESCO World Heritage status."
  },
  {
    "city": "bath",
    "name": "Hiding Space Westgate Apartments",
    "Latitude": 51.380766,
    "Longitude": -2.36263,
    "url": "https://hidingspace.co.uk/",
    "info": "Situated in the centre of Bath, only 100 yards from the Thermae Spa, Westgate Apartments is a collection of studio apartments. These Scandinavian style apartments offer open plan living with contemporary furnishings and the option of a sofa bed for additional guests.\nWhether you are looking for a holiday, a weekend break, business accommodation or a self-catered home from home for extended periods, Hiding Space provides luxurious living in the heart of our beautiful city."
  },
  {
    "city": "bath",
    "name": "Harington’s Hotel",
    "Latitude": 51.382927,
    "Longitude": -2.361857,
    "url": "https://www.haringtonshotel.co.uk/",
    "info": "Welcome to Harington’s Hotel in central Bath – a boutique hotel whose city centre location oozes high quality and luxury accommodation by the bucket load. Our unique hotel is tucked away on an oh-so-traditional cobbled side street that echoes Bath’s Roman heritage. We offer a range of stylish rooms along with self-catered city centre apartments.\nWe are one of just a few luxury hotels in Bath that strike the perfect balance between seclusion and city centre proximity. The hotel is, quite literally, just a stones throw from must-see attractions and must-try eateries. \nYou can see the Jane Austen tours float past our very windows while the Roman Baths, Thermae Spa and Bath University are all but a stroll away. The heart of Bath really is right on our doorstep."
  },
  {
    "city": "bath",
    "name": "THE BIRD",
    "Latitude": 51.382816,
    "Longitude": -2.351842,
    "url": "https://www.thebirdbath.co.uk/",
    "info": "We are a dazzling boutique hotel with a totally fabulous atmosphere in the centre of Bath. Colourful, with  bold designs and statement artwork, we have fashioned a uniquely creative and lively atmosphere.\nNestled within a quiet residential neighbourhood, we thrive on the peace and tranquility being a stones throw from the city centre allows.\nhere are 31 bedrooms at The Bird, from compact, comfy doubles all the way up to our rather fabulous hot tub feature room.\nEach one tells its own story, through hand-crafted wallpaper, unique artwork, dramatic designs and knock out views over Bath and beyond."
  },
  {
    "city": "bath",
    "name": "The Royal Crescent Hotel & Spa",
    "Latitude": 51.387442,
    "Longitude": -2.368088,
    "url": "https://www.royalcrescent.co.uk/",
    "info": "An iconic sanctuary in the city set in an acre of glorious gardens. A sensational spa for a blissful escape and beautiful bedrooms, each one uniquely designed with spectacular views.\nEvery inch of our hotel is underpinned by impeccable service, delivered by staff dedicated to making your stay unforgettable.\nwith a prestigious history that spans more than 250 years, we are one of the only landmark buildings in the world you can sleep in."
  },
  {
    "city": "bath",
    "name": "THE QUEENSBERRY HOTEL",
    "Latitude": 51.387,
    "Longitude": -2.362695,
    "url": "https://www.thequeensberry.co.uk/",
    "info": "Bath Hotels such as ours are few and far between; if you are looking for luxury and impeccable service, and bold, individual style, housed in a characterful Georgian townhouse, right in the centre of our stunning, little city, then you are absolutely in the right place.\nAnd that’s not all, we are also home to the only Michelin-starred Restaurant in Bath, so before you ascend the stairs of an evening for your restful slumber, our Executive Head Chef, Chris Cleghorn will ensure the most impeccable dining experience in a relaxed setting, proudly showcasing the absolute best of the local provenance."
  },
  {
    "city": "bath",
    "name": "No.15 Great Pulteney",
    "Latitude": 51.384531,
    "Longitude": -2.354684,
    "url": "https://www.guesthousehotels.co.uk/",
    "info": "We are so proud and excited to introduce No.15 Great Pulteney to you. It’s everything we believe a good hotel should be.\nFirst of all, it’s in Bath – a place so full of heritage and vibrant creative spirit that it is, without doubt, one of Britain’s greatest cities. Then, there’s our location on one of Bath’s grandest streets. And our listed Georgian buildings that carry untold inherent beauty and grace.\n Add to that interior design details and collections of art and objects that steal and entertain the eye. Our bar and restaurant offer something different yet decidedly British. Our spa nurtures real relaxation. And last but not least, our smiling, inspired hosts making sure every guest feels happy and at home.\nWe think we may have created the best reason you could possibly have to immerse yourself in the unique and ripe-for-exploration charms of Bath."
  }
]