document.body.addEventListener('click', (e) => {
	const burgerButton = e.target.closest('.header__burger-button');

	if (!burgerButton) return;

	burgerButton.closest('.header').classList.toggle('header_opened');
	document.body.classList.toggle('overflow_hidden');

	if (burgerButton.querySelector('use').getAttribute('href') === '#cross') {
		burgerButton.querySelector('use').setAttribute('href', '#burger');
	} else {
		burgerButton.querySelector('use').setAttribute('href', '#cross');
	}
});
