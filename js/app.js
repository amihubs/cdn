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
(function(w, d){
	var b = d.getElementsByTagName('body')[0];
	var s = d.createElement("script"); s.async = true;
	var v = !("IntersectionObserver" in w) ? "8.5.2" : "10.3.5";
	s.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/" + v + "/lazyload.min.js";
	w.lazyLoadOptions = {};
	b.appendChild(s);
}(window, document));