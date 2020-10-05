document.body.addEventListener('click', (e) => {
	const switchInput = e.target.closest('[data-id="order-data-form-switch"]');

	if (!switchInput) return;

	if (switchInput.checked) {
		document.querySelector('[data-id="ul"]').classList.remove('d_none');
		document.querySelector('[data-id="phis"]').classList.add('d_none');
	} else {
		document.querySelector('[data-id="ul"]').classList.add('d_none');
		document.querySelector('[data-id="phis"]').classList.remove('d_none');
	}
});
