/* Скрипт слайдера */

$(document).ready(function () {
	$('.carousel__inner').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.svg"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false
				}
			}
		]
	});
});
