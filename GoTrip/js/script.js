'use strict';

var owl = $('.owl-carousel');
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1,
	items: 3,
	responsive: {
		650: {
			margin: 10,
			startPosition: 1,
			items: 3,
		},
		320: {
			margin: 40,
			startPosition: 0,
			items: 1,
		},
	},
});

$('.slider__button--left').click(function () {
	owl.trigger('prev.owl.carousel');
})

$('.slider__button--right').click(function () {
	owl.trigger('next.owl.carousel');
})

const menuIcon = document.querySelector('.header__menu-icon');
const headerTop = document.querySelector('.header__top');

document.addEventListener('click', (e) => {
	if (e.target.closest('.header__menu-icon')) {
		menuIcon.classList.toggle('active');
		headerTop.classList.toggle('active');
		document.body.classList.toggle('lock')
	}
})