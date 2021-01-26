$(function() {
	//* Fixed header *//

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkscroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkscroll(scrollPos, introH);
	});

		function checkscroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}

	//* Smooth scrol */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
	

		$("html, body").animate({
			scrollTop: elementOffset - 100
		}, 700)

	});

});