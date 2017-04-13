$(document).ready(function() {
   // Image slider
   $(function() {

      var width = 960;
      var animationSpeed = 2500;
      var pause = 6000;
      var currentSlide = 1;

      function startSlider() {
         var interval = setInterval(function() {
            $('.sliderul', $('#slider')).animate({'margin-left': '-='+width}, animationSpeed, function() {
               if (++currentSlide === $('.slide', $('#slider')).length) {
                  currentSlide = 1;
                  $('.sliderul', $('#slider')).css('margin-left', 0);
               }
            });
         }, pause);
      }
      function pauseSlider() {
         clearInterval(interval);
      }
      startSlider();
   });
   // Image slider end
}); // Document end
