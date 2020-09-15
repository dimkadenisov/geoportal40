document.body.addEventListener('click', (e) => {
	const toggler = e.target.closest('.extended-search-block__link');

	if (!toggler) return;

	toggler.parentNode
		.querySelector('.search-filters')
		.classList.toggle('search-filters_closed');
});
