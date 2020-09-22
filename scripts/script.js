"use strict";

document.body.addEventListener('click', e => {
  const toggler = e.target.closest('.search-block__link');
  if (!toggler) return;
  toggler.parentNode.querySelector('.bages-list').classList.toggle('bages-list_closed');
});
"use strict";

document.body.addEventListener('click', e => {
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
"use strict";

document.body.addEventListener('click', e => {
  const clearButton = e.target.closest('.icon-button_clear');
  if (!clearButton) return;
  clearButton.parentNode.querySelector('input').value = '';
});
"use strict";

const inputs = document.querySelectorAll('.inputfile');

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const label = input.nextElementSibling;
  const labelVal = label.innerHTML;
  input.addEventListener('change', function (e) {
    const fileName = this.files && this.files.length > 1 ? 'Выбрано ' + this.files.length + ' файлов' : e.target.value.split('\\').pop();
    if (fileName) label.innerHTML = fileName;else label.innerHTML = labelVal;
  });
}

document.body.addEventListener('change', e => {
  const fileInput = e.target.closest('.file-selector__input');
  if (!fileInput) return;
  const fileName = e.target.value.split('\\').pop();
  fileInput.parentNode.parentNode.querySelector('.file-selector__filename').innerText = fileName;
});
document.body.addEventListener('submit', e => {
  const form = e.target.closest('form');
  if (!form) return;
  e.preventDefault();
  document.querySelector('#biba');
  console.log(e);
});
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
  const orderDataButton = e.target.closest('.order-data-button');
  if (!orderDataButton) return;
  orderDataButton.classList.toggle('order-data-button_opened');
});
document.body.addEventListener('click', e => {
  const orderDataButton = document.querySelector('.order-data-button');

  if (orderDataButton && orderDataButton.classList.contains('order-data-button_opened') && !e.target.closest('.order-data-button')) {
    orderDataButton.classList.remove('order-data-button_opened');
  }
});
"use strict";

document.body.addEventListener('click', e => {
  const switchInput = e.target.closest('[data-id="order-data-form-switch"]');
  if (!switchInput) return;

  if (switchInput.checked) {
    document.querySelector('[data-id="ul"]').classList.remove('visually-hidden');
    document.querySelector('[data-id="phis"]').classList.add('visually-hidden');
  } else {
    document.querySelector('[data-id="ul"]').classList.add('visually-hidden');
    document.querySelector('[data-id="phis"]').classList.remove('visually-hidden');
  }
});
"use strict";

document.body.addEventListener('click', e => {
  const toggler = e.target.closest('.extended-search-block__link');
  if (!toggler) return;
  toggler.parentNode.querySelector('.search-filters').classList.toggle('search-filters_closed');
});
"use strict";

document.body.addEventListener('click', e => {
  const showAllServices = e.target.closest('.geoservices-list__show-all-button');
  if (!showAllServices) return;
  showAllServices.closest('.geoservices-list').classList.toggle('geoservices-list_opened');
});