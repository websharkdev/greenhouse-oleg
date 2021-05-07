// ФИДБЕК СЛАЙДЕР НАЧАЛО  
var FeedBackSwiper = new Swiper(".feedback-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
  },
  breakpoints: {
    // when window width is >= 1920px
    1920: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 520px
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
// ФИДБЕК СЛАЙДЕР КОНЕЦ  