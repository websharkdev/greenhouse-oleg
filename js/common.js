var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 2,
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



document.addEventListener('click', function(e){
    let priceElem = document.querySelectorAll(".cart__choice-price");

    function removeActiveClass(){
        priceElem.forEach(item => {
            item.classList.remove("cart__choice-priceActive");
        })
    }
    priceElem.forEach((item) => {
        item.addEventListener("click", function () {
            removeActiveClass();
            item.classList.toggle("cart__choice-priceActive");
        });
    });
});

var jsTriggers = document.querySelectorAll(".js-tab-trigger"),
    jsContents = document.querySelectorAll(".js-tab-content");

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    var id = this.getAttribute("data-tab"),
      content = document.querySelector(
        '.js-tab-content[data-tab="' + id + '"]'
      ),
      activeTrigger = document.querySelector(".js-tab-trigger.active"),
      activeContent = document.querySelector(".js-tab-content.active");

    activeTrigger.classList.remove("active"); // 1
    trigger.classList.add("active"); // 2

    activeContent.classList.remove("active"); // 3
    content.classList.add("active"); // 4
  });
});

var FeedBackSwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
  breakpoints: {
    // when window width is >= 1920px
    1920: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 520px
    520: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});


// MINI-cart

document.querySelector("#basket").addEventListener('click', (e) => {
  e.preventDefault();

  let minicart = document.querySelector(".minicart");
  let minicartClose = document.querySelector(".minicart__close");

  minicart.classList.toggle('hide');

  minicartClose.addEventListener("click", (e) => {
    minicart.classList.add("hide");
  });
});

// if ($(window).width() < 560) {
//   $(".tab-content__item").ready(function () {
//     max = 4;
//     i = 0;
//     $(".cart__tabs-item").each(function () {
//       i += 1;
//       if (i > max) {
//         $(this).addClass("foo");
//       }
//     });
//   });
// }

if (screen.width < 560) {
  let items = document.querySelectorAll(".cart__tabs-item");
  let showBTN = document.querySelector(".cart__tabs-mobileBTN");
  let max = 4;

  if (items.length >= max) {
    items.forEach((item) => {
      item.classList.add("hide");
    });

    for (let i = 0; i < max; i++) {
      items[i].classList.remove('hide');

      if(i === 3){
        items[i].classList.add("fade");
      }
    }

  }
  showBTN.addEventListener('click', function(e){
    items.forEach((item) => {
      item.classList.remove("hide");
      item.classList.remove("fade");
    });
    showBTN.classList.toggle('hide');
  })
  console.log(items.length)
}