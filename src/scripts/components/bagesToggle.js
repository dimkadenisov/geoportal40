document.body.addEventListener('click', (e) => {
	const toggler = e.target.closest('.search-block__link');

	if (!toggler) return;

	toggler.parentNode
		.querySelector('.bages-list')
		.classList.toggle('bages-list_closed');
});
