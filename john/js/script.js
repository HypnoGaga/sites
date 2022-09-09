'use strict';

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

document.addEventListener('click', (e) => {
	if (e.target.closest('.icon-menu')) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		document.body.classList.toggle('lock');
	}
	if (e.target.closest('.menu__link')) {
		setTimeout(function () {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			document.body.classList.remove('lock');
		}, 500)
	}
});
