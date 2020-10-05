document.addEventListener('scroll', (e) => {
	const header = document.querySelector('.header');
	if (header && window.pageYOffset > 0) {
		header.classList.add('header_scrolled');
	}
	if (header && window.pageYOffset === 0) {
		header.classList.remove('header_scrolled');
	}
});
