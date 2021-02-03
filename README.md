# Visit Kyrgyzstan
___
___
___
## Demo 


____
___
## About
___
___
This website aims to promote and advance Kyrgyzstan as a travel destination on the international market.
It communicates the diverse appeal of the country: it's authenticity, natural beauty and unique nomadic culture 
and provides you with the necessary inspiration to start planning a visit for next summer!


## UX
___
___
### **This website will appeal to:**

* First time visitors
    * I want to understand easily the main purpose of the website.
    * 

* Returning visitors


### Design


### Wireframes

* [Desktop Version](assets/wireframes/MS2-desktop.png)
* [Tablet and mobile Version](assets/wireframes/MS2-tablet-mobile.png)

## Features
___
___

### Existing Features

This website is a single page website that contains of one html page - index.html, that consists of four sections: Home, Discover, Explore and Contact.
To navigate to different destinations on the website, users need to click navigation links that allow them to jump to different sections of the content or scroll down the page.
The content is split into small chunks and is clean and comprehensible. 
It aims to make the experience more continuous, intuitive and fluid for the users. It is easy for users to identify the beginning, middle and the end of the page.

* _**Header**_
    * Header - responsive navigation header, designed using Bootstrap "navbar" and "fixed-top" and "navbar-light" classes.  
    It is positioned on top of the page and always visible. This allows easy navigation if users wish to jump to a different section of the website. 
    * Navigation bar includes a brand logo and links to the four sections of the website: Home, Discover, Explore and Contact.
    * Navigation links are collapsed in small screen sizes into a hamburger menu and from medium size screens and larger, expand into a full size menu bar.
    * Brand logo serves as a Home page link, in addition to the Home link in the navbar. It is particularly convinient for users accessing the website on smaller screen devices to get 
    back to the Home page without having to use the hamburger menu.
    * All navigation links change color dark grey on hover and the current page's link stays "active", so the users can easily identify the page they are on.

* _**Home**_
    * A temporary Covid alert banner has been added to the top of the Home Page, to help users find out latest information on the situation in Kyrgyzstan as 
    soon as they land on the website. "Learn more" - serves as a link and takes users to GOV.UK website's Kyrgyzstan travel advice page, which opens in a tew tab.
    The red background color has been chosen to highlight the importance of the section and to draw attention. 
    * Home page consists of a Bootstrap image carousel and cycles through a series of images, that showcase the natural beauty of Kyrgyzstan.
    The image carousel allows 5 seconds delay between automatically cycling the images and includes previous / next controls for users convenience. 

* _**Discover**_
    * This page consists of a heading, a text paragraph and Bootstrap 3 cards section. 
    Heading - is an HTML h1 element, that also serves as a title for the whole website. It is followed by a text section and three column Bootstrap card section. 
    * Each card consists of an image to visually support the content of the section and is followed by text. Images zoom out on hover for added user interactivity. 
    * On the bottom of the section there are "Read more" buttons which hide extra contents of the paragraphs and show the hidden content once user clicks on the button. 
    It allows to keep the page clean and neat. Once clicked, the buttons' inner text change to "Read Less", which user can click again to collapse the content. 


* _**Explore**_
    * Explore page consists of a heading, a sidebar and a map elements. The sidebar section contains a placeholder heading and a description text for when the page is loaded.
    * The map section was designed using Google Maps API and focused on the map of Kyrgyzstan. It also contains markers to identify places of interest for users. 
    * Infowindow with the name of the location appears on mouseover the markers and disappears on mouseout. This was desined to avoid clutter and increase visibility of the elements of the map. 
    If users click on a marker, a full information, including an image, name and description of the place appear in the sidebar section. 


* _**Contact**_
    * This page consists of a heading, paragraph and a contact form. There are three fields in the form: Name (required), 
    Email (required) and Message (optional), as well as a checkbox and a "Submit" button. All fields were carefully selected to make the form look simple to use and informal in order to appeal to a wider pool of users. 
    "I would like to receive a newsletter" checkbox allows users to subscribe for a newsletter.
    * The form has been connected to EmailJS and allows users to send emails directly to me using client-side technologies, without a need for a server. Upon clicking on the "Submit" button
    of the form, users will see a SweetAlert2 custom popup box to inform them if it has been successful / failed.


* _**Footer**_
    * Footer is designed using Bootstrap and is located on the bottom of the page. It takes up the whole width of the screen on all devices. 
    * The social media icons are placed in the middle of the bar and change color on hover to let the users know they are clickable. Icons are linked to the external social media websites and open in new tabs.
    * Copyright info is placed underneath the social media icons. 


### Future Features

* To add _**Itinerary Examples**_ to give prospective visitors an idea of where can they go what can they do on their next holiday.
* To add a _**Travel Blog**_ to the website that could also be posted on the website's social media pages. 
Some of the ideas for the blog:
    * Advice for first-time travellers
    * What to pack when you're going on a trip
    * Tips for families with young children
    * Top 10 must see places in Kyrgyzstan
* To integrate _**Customer Reviews**_ section to the website, as this would enchance customers' confidence in using the website.


## Technologies Used 
___
___
### Languages Used
* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries and Programs Used

* **[Bootstrap v4.2.1](https://getbootstrap.com/docs/4.2/getting-started/introduction/)** - used to create a layout and to build a responsive, mobile-first design, 
which is compatible with all modern browsers. The components used: navigation, buttons, cards and image-carousel. 
* **jQuery and Popper.js** plugins - required to ensure proper rendering of the Bootstrap components listed above.  
* **Git** - used for version control and to keep track of the changes made to the repository.
* **Gitpod** - open source development platform, allowed me to add, commit and push files to GitHub.
* **GitHub** - used as a hosting service for version control and future collaborations.
* **Balsamiq** - to create a mockup to allow me to plan the layout and content of the website.
* **[Tinypng.com](https://tinypng.com/)** - to compress and optimise the images used for this website.
* **[Font awesome](https://fontawesome.com/)** - to add Font Awesome icons to the footer section.
* **[Adobe Photoshop Express](https://photoshop.adobe.com/)** - to resize some of the images used for the map section of the website.
* **Google Fonts** - Roboto font has been used throughout the website.
* **Google maps API** - used to embed Google Maps into the website, to provide users with the locations information.
* **EmailJS API** - to create an email template and enable users to send emails directly without useing the server.
* **SweetAlert2** - an interactive custom modal window, provides a status confirmation (success / fail) when users submit a form on the website.

## Testing
___
___
### Code Validity
HTML Markup Validation Service - [No errors or warnings to show](https://validator.w3.org/)
CSS Validation Service - [No Error Found](https://jigsaw.w3.org/css-validator/)
JavaScript Code Quality Tool - [JSHint](https://jshint.com/) 

### Testing User Stories from UX section of this file 

#### First Time Visitors' Goals 



#### Returning Visitors' Goals



### Further Testing


## Version Control
* 


## Deployment
___
___

## Credits

### Code

### Content
* 


### Media
The images used in this website were obtained from free stock images website [Unsplash](https://unsplash.com/) as well as licenced images from royalty-free stock image site [Adobe Stock](https://stock.adobe.com/uk/) 
and compressed using [TinyPNG](https://tinypng.com/).
* Carousel images sources:
    * Image 1 is from Unsplash by [Bobby Rahe](https://unsplash.com/photos/hJbRHIzTvto)
    * Image 2 is from [Adobe Stock](https://stock.adobe.com/uk/images/kyrgyzstan-near-karakol/77161258)
    * Image 3 is from Unsplash by [Sam Marx](https://unsplash.com/photos/xbzXSygS6iw)
    * Image 4 is from [Adobe Stock](https://stock.adobe.com/uk/images/mountain-climber-goes-around-glacier-crack-on-the-background-of-tengri-tau-range-central-tian-shan-kazakhstan-kyrgyzstan-china/398761416)
    * Image 5 is from Unsplash by [Bobby Rahe](https://unsplash.com/photos/gkf1w-Y_Ub0)

* Card Section
    * All three images for this section 

### Acknowledgements
* My mentor **Excellence Ilesanmi** for his continuous support and feedback throughout this project.
* CI Tutors and Slack Community for help and answering all my questions. 
* Bootstrap documentation has been used to create this responsive and compatible with all modern browsers website. The components used include: Buttons, Card, Carousel and Navbar.
* Recommendations from [this](https://www.youtube.com/watch?v=Zxf1mnP5zcw) video tutorial have been helpful in optimising Google Maps JavaScript code so new map markers can be added easily in the future. 
* I have referred to CI "Signing Up To EmailJS" Walkthrough Project when linking my Contact form to EamilJS.



