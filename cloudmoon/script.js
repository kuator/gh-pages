let mainNav = document.getElementById('js-menu');
let navbarToggle = document.getElementById('js-navbar-toggle');

navbarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

// animate after loading
window.addEventListener("load", function(){
  document.querySelector('.team-name').id = 'logo';
});

// jquery's domready vanilla js alternative
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
    ready(function() {
      window.addEventListener('scroll', function() {
        let navbar = this.document.querySelector('.navbar');
        let headerHeight = document.querySelector('header').offsetHeight;
        let windowScroll = window.scrollY;
        let navHeight = navbar.offsetHeight;
        if (windowScroll + navHeight >= headerHeight) 
          navbar.classList.add('solid-nav');
        else 
          navbar.classList.remove('solid-nav');
      });
    });
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
