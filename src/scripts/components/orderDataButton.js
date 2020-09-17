document.body.addEventListener('click', (e) => {
	const orderDataButton = e.target.closest('.order-data-button');

	if (!orderDataButton) return;

	orderDataButton.classList.toggle('order-data-button_opened');
});

document.body.addEventListener('click', (e) => {
	const orderDataButton = document.querySelector('.order-data-button');

	if (
		orderDataButton &&
		orderDataButton.classList.contains('order-data-button_opened') &&
		!e.target.closest('.order-data-button')
	) {
		orderDataButton.classList.remove('order-data-button_opened');
	}
});
