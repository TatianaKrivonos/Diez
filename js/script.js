$(document).ready(function(){

	function CheckWindowSize() {

		if ( $(window).width() < 1200) {
			$("#video-slider").slick({
				adaptiveHeight: true,
				autoplay: true,
		  		autoplaySpeed: 3000,
			});
		}

		else {
			$("#video-slider").slick("unslick");
		}
	}

	CheckWindowSize();

	$(window).on("resize", function(){
		CheckWindowSize();
	});	


	var burger = document.getElementById('burger');
	burger.addEventListener('click', mainNavVisibleBurger);
	function mainNavVisibleBurger(e) {
	  e.preventDefault();
	  burger.classList.toggle('burger--close');
	  document.getElementById('main-nav').classList.toggle('main-nav--open');
	}
	
});