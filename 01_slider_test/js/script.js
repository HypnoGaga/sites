'use strict';

const myTextSlider = new Swiper('.slider-text', {
	slidesPerView: 2,
	spaceBetween: 50,
	autoHeight: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
});

const myImageSlider = new Swiper('.slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoHeight: true,
	loop: true,
	slidesPerView: 2,
	spaceBetween: 50,
	controller: {
		control: myTextSlider,
		// inverse: true,
		by: 'slide',
	},
});


// Передача управления между слайдерами
// myImageSlider.controller.control = myTextSlider;
// myTextSlider.controller.control = myImageSlider;