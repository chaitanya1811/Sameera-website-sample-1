// Responsive Menu JavaScript

$(document).ready(function() {
  // Close mobile menu when a menu item is clicked
  $('.navbar-nav .nav-link').click(function() {
    if ($('.navbar-toggler').is(':visible')) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Fix navbar on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.ftco-navbar-light').addClass('scrolled');
    } else {
      $('.ftco-navbar-light').removeClass('scrolled');
    }
  });
});
