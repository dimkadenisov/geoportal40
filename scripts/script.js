"use strict";

const linksSwiper = document.querySelector('.hero-swiper__inner') && new Swiper('.hero-swiper__inner', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
"use strict";

document.body.addEventListener('click', e => {
  const switchInput = e.target.closest('[data-id="order-data-form-switch"]');
  if (!switchInput) return;
  console.log('event');

  if (switchInput.checked) {
    document.querySelector('[data-id="ul"]').classList.remove('visually-hidden');
    document.querySelector('[data-id="phis"]').classList.add('visually-hidden');
  } else {
    document.querySelector('[data-id="ul"]').classList.add('visually-hidden');
    document.querySelector('[data-id="phis"]').classList.remove('visually-hidden');
  }
});