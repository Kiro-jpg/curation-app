$(document).ready(function () {
  // Transition effect for navbar 
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 10) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

let player = document.getElementById("sort-songs");
new Sortable(player, {
  handle: '.sortingsong',
  animation: 200
});