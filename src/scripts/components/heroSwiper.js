const linksSwiper =
	document.querySelector('.hero-swiper__inner') &&
	new Swiper('.hero-swiper__inner', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
