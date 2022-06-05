/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for all portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio a.portfolio-box'
    // });

});

// Creating SimpleLightbox for each project
var cstBuddy = document.getElementById("cstbuddy");
cstBuddy.style.cursor = "pointer";
cstBuddy.addEventListener("click", function() {
    SimpleLightbox.open({
        content: '<div style="width:400px; padding:0.8em"><h3>CST Buddy</h3>' 
            + '<p>A chatbot web app designed to help BCIT CST students by providing them '
            + 'with useful information and links about school services.</p>'
            + '<img class="img-fluid" src="assets/img/CSTBuddyHome.PNG" alt="..." />'
            + '<img class="img-fluid" src="assets/img/Chatbot.PNG" alt="..." id="chatbotHome"/>'
            + '<p class="projectLinks"><a href="https://github.com/lliang826/CSTBuddy" target="_blank">Github repo</a></p>'
            + '<p class="projectLinks"><br><a href="https://comp1800-349e8.web.app/" target="blank">Link to app</a>'
            + '<br><br>To sign in, use \"test3@gmail.com\" for the email and password.</p></div>',
        elementClass: 'slbContentEl',
    });
});

var itemTracker = document.getElementById("itemTracker");
itemTracker.style.cursor = "pointer";
itemTracker.addEventListener("click", function() {
    SimpleLightbox.open({
        content: '<div style="width:400px; padding:0.8em"><h3>ItemTracker</h3>' 
        + '<p>A unique to-do list Android mobile app that allows users to create public/private lists and '
        + 'public/private items. <br><br>\'Public\' means that the list or item is shared with '
        + 'other users, while \'private\' means that the list or item is kept confidential '
        + 'and no one but the user can see or access them.</p>'
        + '<video height="600" id="itemTrackerVideo" autoplay loop muted> '
        + '<source src="assets/video/ItemTracker.mp4" type="video/mp4" /></video>'
        + '<p class="projectLinks"><a href="https://github.com/lliang826/ItemTracker" target="_blank">Github repo</a></p>',
        elementClass: 'slbContentEl',
    });
});

var spotUrVibe = document.getElementById("spotUrVibe");
spotUrVibe.style.cursor = "pointer";
spotUrVibe.addEventListener("click", function() {
    SimpleLightbox.open({
        content: '<div style="width:400px; padding:0.8em"><h3>SpotUrVibe</h3>' 
        + '<p>A social media web app that allows connects users based on music preferences. '
        + 'Users can recommend Spotify songs and playlists, and message others within the app.</p>'
        + '<p class="projectLinks"><a href="https://devpost.com/software/spoturvibe" target="_blank">nwHacks 2021 Devpost</a></p>'
        + '<p class="projectLinks"><a href="https://github.com/lliang826/SpotUrVibe" target="_blank">Github repo</a></p>',
        elementClass: 'slbContentEl',
    });
});

// Typewriter effect (Source: https://css-tricks.com/snippets/css/typewriter-effect/)
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// Change the masthead background image over time
var images = ['../assets/img/taiwan.jpg', 
              '../assets/img/skiing2.jpg', 
              '../assets/img/trail.JPG', 
              '../assets/img/skiing.jpg'];

// Preloads the images so there is no delay
var preloadedImages = [];
for (let i = 0; i < images.length; i++) {
    preloadedImages[i] = new Image();
    preloadedImages[i].src = images[i];
}

var i = 0;
var change = setInterval(function() {
    if (i == preloadedImages.length) {
        i = 0;
    }
    document.getElementById("masthead").style.backgroundImage = 
        "linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, "
        + "rgba(92, 77, 66, 0.8) 100%), url(" + preloadedImages[i].src + ")";
    i++;

}, 5000);