'use strict';

const iconOpen = document.querySelector('.menu__icon');
const iconClose = document.querySelector('.menu__icon-close');

document.addEventListener('click', function (e) {
	if (e.target.closest('.menu__icon')) {
		document.body.classList.add('lock');
	} else if (e.target.closest('.menu__icon-close')) {
		document.body.classList.remove('lock');
	}
});