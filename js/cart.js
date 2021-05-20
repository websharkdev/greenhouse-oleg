// КАРТОЧКИ СЛАЙДЕР
var swiper = new Swiper(".gallery-thumbs", {
  slidesPerView: 4,
  spaceBetween: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  width:  256,
});
var swiper2 = new Swiper(".gallery-top", {
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// КАРТОЧКИ ВЫБОР НАЧАЛО 
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
// КАРТОЧКИ ВЫБОР КОНЕЦ


// ТАБЫ НАЧАЛО 
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
// ТАБЫ КОНЕЦ


//  Если много текста в описании, то скрывает, и добавляет кнопку показать ещё
if (screen.width < 560) {
  let items = document.querySelectorAll(".cart__tabs-item");
  let showBTN = document.querySelector(".cart__tabs-mobileBTN");
  let parentItem = document.querySelector(".tab-content");
  let max = 4;

  if (items.length >= max) {
    items.forEach((item) => {
      item.classList.add("hide");
    });

    for (let i = 0; i < max; i++) {
      items[i].classList.remove("hide");

      if (i === 3) {
        items[i].classList.add("fade");
      }
    }
  }
  showBTN.addEventListener("click", function (e) {
    items.forEach((item) => {
      item.classList.remove("hide");
      item.classList.remove("fade");
    });
    showBTN.classList.toggle("hide");
    parentItem.classList.add("textVisible");
  });
}
// ДОБАВИТЬ В ЗАКАЗ >> добавляем галочку 

let addOrderBTN = document.querySelectorAll(".extra__table-btn"),
    addOrderCheckBox = document.querySelectorAll(".extra__table-checkbox");

for (let i = 0; i < addOrderBTN.length; i++) {
  addOrderBTN[i].addEventListener('click', (e) => {
    addOrderCheckBox[i].toggleAttribute('checked');
  });
}
// ФИДБЕК СЛАЙДЕР НАЧАЛО  
var FeedBackSwiperCart = new Swiper(".feedback-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".arrow-next.feedback-next",
    prevEl: ".arrow-prev.feedback-prev",
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
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
// ФИДБЕК СЛАЙДЕР КОНЕЦ  