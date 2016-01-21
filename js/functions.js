/**
 * Code emprunté sur StackOverflow : http://stackoverflow.com/questions/9335140/how-to-countdown-to-a-date
 */
$(function countdown() {

  var end = new Date('03/17/2016 12:00 PM');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

      clearInterval(timer);
      document.getElementById('countdown').innerHTML = 'TERMINE!';

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = ('0' + Math.floor((distance % _day) / _hour)).slice(-2);
    var minutes = ('0' + Math.floor((distance % _hour) / _minute)).slice(-2);
    var seconds = ('0' + Math.floor((distance % _minute) / _second)).slice(-2);

    document.getElementById('countdown').innerHTML = days + ' jours ';
    document.getElementById('countdown').innerHTML += hours + ':';
    document.getElementById('countdown').innerHTML += minutes + ':';
    document.getElementById('countdown').innerHTML += seconds + '';
  }

  timer = setInterval(showRemaining, 1000);

});
 
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

  $('#toTop').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});
