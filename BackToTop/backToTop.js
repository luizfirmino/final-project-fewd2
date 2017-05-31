(function($) {
             $.fn.backToTop = function() {
                 return this.each(function() { 
                arrowBtn = $(this);
                arrowBtn.on("click", function() {
        $("html, body").animate({scrollTop : 0},600);
		      return false;
           });
	//Check to see if the window is top, if not then display button
	$(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
			arrowBtn.fadeIn();
		} else {
			arrowBtn.fadeOut();
		}
	});

        });
}//.fn
        }(jQuery));
