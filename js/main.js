
$(function () {
	$(".header__slider").slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="right arrow top1">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="right arrow top2">',
		asNavFor: ".slider-dots"
	});

	$(".slider-dots").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: ".header__slider"
	});

	$(".serf-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="right arrow top1">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="right arrow top2">',
	})
});
