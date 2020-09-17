document.body.addEventListener('click', (e) => {
	const showAllServices = e.target.closest(
		'.geoservices-list__show-all-button',
	);

	if (!showAllServices) return;

	showAllServices
		.closest('.geoservices-list')
		.classList.toggle('geoservices-list_opened');
});
