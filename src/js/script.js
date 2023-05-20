$(document).ready(function(){
	$('.hero__slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slider-dots hero__slider-dots'
	});

	$('.brands__slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slider-dots brands__slider-dots',
		slidesToShow: 4
	});

	$('.about__testimonials-slider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'slider-dots about__testimonials-slider-dots',
		slidesToShow: 2
	});
});  