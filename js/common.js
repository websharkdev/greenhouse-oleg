var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: galleryThumbs,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});
