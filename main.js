(function($){
  'use strict';

  $(document).ready(function(){
    var slides = $("#slideshow > li");
    var count = 0;

    function toggle_slide(){
      count = (count + 1) % 3;
      slides.removeClass("current").eq(count).addClass("current");
    }

    setInterval(toggle_slide, 2000);

  });

})(jQuery);
