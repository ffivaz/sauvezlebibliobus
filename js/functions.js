/**
 * Smooth scrolling. Inspiration: http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link
 */
$(document).ready(function() {
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
});
