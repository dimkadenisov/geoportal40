document.body.addEventListener('click', (e) => {
	const switchInput = e.target.closest('[data-id="order-data-form-switch"]');

	if (!switchInput) return;

	if (switchInput.checked) {
		document
			.querySelector('[data-id="ul"]')
			.classList.remove('visually-hidden');
		document.querySelector('[data-id="phis"]').classList.add('visually-hidden');
	} else {
		document.querySelector('[data-id="ul"]').classList.add('visually-hidden');
		document
			.querySelector('[data-id="phis"]')
			.classList.remove('visually-hidden');
	}
});
