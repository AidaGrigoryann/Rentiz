const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_active');
  })
}



// Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter')

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = event.target.textContent;
      }
    })
  })
}



const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.popular-slider__next',
    prevEl: '.popular-slider__prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    }
  }
});



const reviewsSlider = new Swiper('.slider-reviews', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.slider-reviews__next',
    prevEl: '.slider-reviews__prev',
  },

});