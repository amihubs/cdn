$(document).ready(function(){
      $('body').append('<div id="bTt" class="btn btn-info"><i class="fa fa-angle-up" aria-hidden="true"></i></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#bTt').fadeIn();
			} else {
				$('#bTt').fadeOut();
			}
		}); 
    $('#bTt').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
