// Smooth scrolling for anchor links
$(document).ready(function() {
  // Add smooth scrolling to all links with hash
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
        location.hostname == this.hostname) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100 // Offset for fixed header
        }, 800);
        return false;
      }
    }
  });
});
