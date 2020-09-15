document.body.addEventListener('click', (e) => {
	const clearButton = e.target.closest('.icon-button_clear');

	if (!clearButton) return;

	clearButton.parentNode.querySelector('input').value = '';
});
