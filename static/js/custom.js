$(function(){
	new WOW().init();
});
$(function(){
	$('#customers-testimonials').owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});
$(function(){
	$('#clients-list').owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() < 50) {
			$('nav').removeClass("teleant-top-nav");
			$('a.nav-item').removeClass("custom-link");
			$('#back-to-top').fadeOut();
		}
		else{
			$("nav").addClass("teleant-top-nav");
			$('a.nav-item').addClass("custom-link");
			$('#back-to-top').fadeIn();
		}
	});
});
$(function(){
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top - 64
		}, 1250, "easeInOutExpo");
	});
});