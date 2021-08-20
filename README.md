# Lux Stays UK Website

[View the deployed project here.](https://tiff-c.github.io/ms2-interactive-frontend/)

The goal for this project is to create a travel site that promotes staycations for Adult British residents across six major UK Cities; London, Edinburgh, Bath, Brighton, Bristol, Cardiff. The site will also provide customer base growth through repeat users of the site.

It will be an interactive site that responds to the user with content that is direct and to the point to allow for ease of use. It should feel simple and easy for first time users to get to the information they need with links/integration to services the user may require during their trip as well as potential ways to get there. 

## UX Design

* ### User Stores

  * As a user I want... 
    1. To be able to use the website with ease on my first use
    1. To find out information about the different places I can stay and the types of accommodation and activities available.
    1. See pictures of the different regions, maps and user reviews to help me decide where to stay
    1. Links to booking websites for accommodation and indoor and outdoor activities so I can book my trip when I have decided where to stay.
    1. To be able to search for all locations that offer a specific activity I want and to be able to share the results of this search with other members of my travel party.
    1. To get updates about new attractions opening up and local accommodations in the area.

* ### Potential Features
  
  * using the user stories above I created a list of 11 potential features to include in the project. I have included a table below to outline thease features. 
  [A copy of the original document can be seen here.](https://docs.google.com/spreadsheets/d/1XYvuyTWF1FxwnLfmtv338TL2NEqvYrcvG86dHjPBN8o/edit?usp=sharing)

  Feature | User Story | Acceptance Criteria | Included in MVP
  ------- | ---------- | ------------------- | --------------
  1 | 1 | Use a simple layout conforming to standard conventions that allow the user to use the site intuitively on their first use. Using icons, clear to read fonts on backgrounds that do not obscure the text. | Yes, across site.
  2 | 1 | Providing a call to action on the landing page that will take them to a search feature. | Yes, takes users to destinations.html
  3 | 1 | Having a list of the regions on the landing page to allow the user to easily find a location if they have one in mind for their trip. | Yes, but on it's own page
  4 | 2 | Use the Sygic travel API to access information on UK tours, hotels, places and popular trips. Display this information on the site by accessing the dom using javaScript and inserting the results onto the web page. | No, not viable enough with given time frame
  5 | 3 | Use high quality images across the site along with descriptions of each region that provide information about the types of activities I can take part in within that region. | Yes, all apart from accomodation.html
  6 | 3 | Use google maps API to display a map of the area the user is currently viewing. | Yes, on accomodation.html
  7 | 3 | Use the ratings provided by Sygic travel API to give users a rating out of five stars for the attractions/accommodation in the area as well as a rating of the area itself. | No, not viable enough with given time frame
  8 | 4 | Provide links to booking websites for accommodation and all activities for each region and specific areas within that region such as popular cities. | Yes, links to hotel sites included
  9 | 5 | Provide a search/filter function that allows the user to search by region or activity type using the tags and categories provided by the Sygic API. | No, not viable enough with given time frame
  10 | 5 | Use the ‘Get’ method for the search function that will allow the user to share the results of their search with other members of their travel party. | N/A, sub feature of feature 9.
  11 | 6 | Provide a sign up to newsletter call to action that will keep users up to date with new attractions, accommodation etc. | No, whilst viable, not important enough to include in MVP with given time frame.

  * As can be seen in the [original document](https://docs.google.com/spreadsheets/d/1XYvuyTWF1FxwnLfmtv338TL2NEqvYrcvG86dHjPBN8o/edit?usp=sharing). The sum of the importance of the features when listed 1-5 *(5 being most important)* is **41**. The average viability of the `features * number-of-features` also equals **41**. This meant it would be feasable to include all features in the project if time was no issue. However as there was a time constraint for the project I opted to not include any of the Sygic API features as I felt using an API for the first time during a project would be an irresponsible use of time.
  * I also opted to not include feature 11 in my MVP as the feature to get updates isn't as relevant to the other features being included. This can be seen in the wireframes attached below.

* ### Information Architecture

  * With an idea of the features that will be included in the MVP I was able to move onto thinking about the information architecture of the site. 
  * During this plane of UX I created the below Site Map that shows the main index.html with three other pages; destinations.html, accomodation.html and eateries.html.


  ![Image of Site Map](/assets/images/site-map.png)

  * As I am not using the Sygic API I will be compiling a list of top 10 hotels and restaurants for each city into a google sheet and then exporting this as a JSON file that I will be able to consume to display the relevant details on accomodation.html and eateries.html.

* ### User Journey

  * During the later part of the design process I envisioned the following user journeys when using the site.

  * #### First time visitor:
    
    1. The user arrives on landing page and sees call to action `Choode your destination` button. The user clicks the CTA.
    1. The user arrives on destinations.html, they view the six cities about info and image.
    1. Upon choosing a city the user can then view the accomodation page. This page is responsive to the user and loads with the first city's first hotel being displayed to allow the user to easily understand the interface. They will be able to see info about the hotel and a map with the hotels location marker being displayed.
    1. Once the user has decided on a hotel they can click the CTA `Go to hotel website`. This will open a new tab in the browser ensuring the user can continue on their journey through the site uninterrupted.
    1. *Optional*: The user can then view the top 10 restaurants available in their chosen city via eateries.html. The user will be able to go to restaurant site in the same way as with the hotels.

  * #### Returning visitor:
    
    1. On returning to the site the user can either navigate to their intended destination via the navbar or via the cards under `<h1>Know where you want to stay?</h1>`. 
    1. The user can continue on in their journey the same way as the first use.

* ### Wireframes
  
  * #### index.html wireframe - [view](assets/images/index.png)
  * #### destinations.html wireframe - [view](assets/images/destinations.png)
  * #### accomodation.html wireframe - [view](assets/images/accomodation.png)
  * #### eateries.html wireframe - [view](assets/images/eateries.png)


* ### Colour Scheme
  
  * As this is a site for luxury travel I wanted to use colours that represent luxury. I found [this colour palette](https://drive.google.com/file/d/11uv4--fLZgmWbeZhUF9di_1vYKSjGIx8/view?usp=sharing) and felt it would work well with my project. (*Source of colour scheme credited below*).


* ## Development

  * During the development of my site I realised the amount of time it would take to get the data for the hotels and restuarunts. Due to this I have decided to remove the eateires.html page from the MVP as I only had time to get data for the London restaurants.

  * My full development process and testing can be seen in my commit messages. 

  * Both CSS and HTML have been passed through validator, only CSS errors present are from Bootstrap and only one error where `<a></a>` is a descendant of `<button></button>`.

  * ### Deployment
    
    * I encountered no unexpected errors upon deployment of my site. 


* ## Features

  * In addition to the features outlined above the site is:
    * Fully responses on all device sizes. 
    * Interactive 

  * ### Languages Used:
   
    * CSS
    * HTML
    * JavaScript

  * ### Frameworks, Libraries and Programs Used:

    * #### Bootstrap 5.1.0
      * Bootstrap was used to allow speedy creation of HTML Elements
    * #### Google Fonts
      * Google fonts was used to import the Roboto and Exo 2 fonts into the project.
    * #### Font Awesome
      * Used my FontAwesome kit to easily add social icons to footer
    * #### jQuery 
      * used to allow for quick manpulation of DOM elements.
    * #### Google Drive / Docs
      * For storing project files before upload to project.
    * #### Google app: [Export Sheet Data](https://workspace.google.com/marketplace/app/export_sheet_data/903838927001)
      * Used to export sheets data as JSON file.
    * #### Git
      * For version control
    * #### GitHub 
      * To store my project in an online Repository
    * #### GitPod
     * IDE used to develop site
    * #### Balsamiq
      * To build wireframes


* ## Content Sources:
  
  * ### [destinations info](https://www.visitbritain.com/gb/en)
  * ### [images](https://www.pxfuel.com/en/search?q=london)
  * ### [Hotels](https://www.tripadvisor.co.uk/)
  * ### [Lat and Long (for map markers)](https://www.freemaptools.com/convert-uk-postcode-to-lat-lng.html)


