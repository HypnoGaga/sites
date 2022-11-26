'use strict'

// получаем все спойлеры в константу
const spoilers = document.querySelectorAll('.spoiler');
// если длина коллекции спойлеров больше 0
if (spoilers.length) {
	// перебираем спойлеры
	spoilers.forEach(item => {
		const spoiler = item;
		// запускаем функцию работы со спойлером
		activeSpoiler(spoiler);
	});
	// функция работы со спойлером
	function activeSpoiler(spoiler) {
		// получаем все spoilerItems конкретного спойлера
		const spoilerItems = spoiler.querySelectorAll('.spoiler__item');
		// вешаем событие "клик" на спойлер
		spoiler.addEventListener('click', (e) => {
			// если клик срабатывает на элементе внутри спойлера и у него есть клас '.spoiler__button'
			if (e.target.closest('.spoiler__button')) {
				// получаем активную кнопку спойлера
				const spoilerButtonActive = e.target.closest('.spoiler__button');
				// проверка на наличие атрибута 'data-accord' у элемента 'spoiler'
				if (spoiler.hasAttribute('data-accord')) {
					// перебираем items внутри спойлера
					spoilerItems.forEach(item => {
						// в переменную берем элемент с контентом внутри спойлера
						const itemText = item.lastElementChild;
						// если у item спойлера есть класс 'active'
						// и этот item НЕ является предком кнопки на которую нажали
						if (item.classList.contains('active') && item != spoilerButtonActive.parentElement) {
							// удаляем класс 'active'
							item.classList.remove('active');
							// удаляем высоту элемента с контентом внутри спойлера
							itemText.style = '';
						}
					});
				}
				// если нет атрибута 'data-accord' у элемента 'spoiler'
				const spoilerItemActive = spoilerButtonActive.parentElement;
				const itemText = spoilerItemActive.lastElementChild;
				spoilerItemActive.classList.toggle('active');
				if (spoilerItemActive.classList.contains('active')) {
					itemText.style.height = itemText.scrollHeight + 'px';
				} else {
					itemText.style.height = '';
				}
			}
		});
	}
}