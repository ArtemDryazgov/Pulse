/* Скрипт слайдера */
$(document).ready(function () {
	$('.carousel__inner').slick({
		infinite: true,
		speed: 1200,
		/* autoplay: true, */
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/right.svg"></button>',
		dotsClass: 'slick-dots',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});
});