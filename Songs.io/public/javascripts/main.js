$(document).ready(function() {
    var count = 0;
    var blocks = $(".block");
  
    var testEffect = setInterval(function() {
      $(blocks[count - 1]).removeClass("hover");
      $(blocks[count]).addClass("hover");
      count++;
      if (count > 4) clearInterval(testEffect);
    }, 800);
  });
  