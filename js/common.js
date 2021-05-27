jQuery(".modalQuick__arrow").on('click', function() {
  jQuery(".modalQuick").addClass('hide');
});
jQuery(".modalQuick__btns .cancel").on("click", function () {
  jQuery(".modalQuick").addClass("hide");
});

jQuery(".takeOrder").on("click", function () {
  jQuery(".modalQuick").toggleClass("hide");
  jQuery(document).mouseup(function (e) {
    if (jQuery(".modalQuick").has(e.target).length === 0) {
      jQuery(".modalQuick").addClass("hide");
    }
  });
});

jQuery(".hamburger").on("click", function (e) {
  e.preventDefault();
  jQuery(".mobileMenu").toggleClass("hide");
});
jQuery(".mobileMenu__arrow").on("click", function (e) {
  e.preventDefault();
  jQuery(".mobileMenu").toggleClass("hide");
});
jQuery("#phone").mask("7-999-999-99-99");
jQuery(".minicart__input").mask("7-999-999-99-99");


// MINI-cart
document.querySelector("#basket").addEventListener("click", (e) => {
  e.preventDefault();

  let minicart = document.querySelector(".minicart");
  let minicartClose = document.querySelector(".minicart__close");

  minicart.classList.toggle("hide");

  minicartClose.addEventListener("click", (e) => {
    minicart.classList.add("hide");
  });
});

// Проверка на наличие класса у карточки

if (document.querySelector(".cart__page")) {
  // КАРТОЧКИ СЛАЙДЕР
  var swiper = new Swiper(".gallery-thumbs", {
    slidesPerView: 4,
    spaceBetween: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    width: 256,
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
  document.addEventListener("click", function (e) {
    let priceElem = document.querySelectorAll(".cart__choice-price");

    function removeActiveClass() {
      priceElem.forEach((item) => {
        item.classList.remove("cart__choice-priceActive");
      });
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
    addOrderBTN[i].addEventListener("click", (e) => {
      addOrderCheckBox[i].toggleAttribute("checked");
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
}

// Проверка на наличие класса у каталога

if (document.querySelector(".catalog__page")) {
  let catalogArrow = document.querySelector(".catalog__filter-arrow");
  let catalogOpenBTN = document.querySelector(".catalog__open");
  let catalogFilter = document.querySelector(".catalog__filter");

  catalogArrow.addEventListener("click", (e) => {
    e.preventDefault();
    catalogArrow.classList.toggle("flipArrow");
    catalogFilter.classList.toggle("shortCatalogFilter");
  });

  catalogOpenBTN.addEventListener("click", (e) => {
    e.preventDefault();
    catalogOpenBTN.classList.toggle('OpenFilterTablet');

    if(document.querySelector('.OpenFilterTablet')){
      catalogFilter.classList.toggle("shortCatalogFilter");
      catalogArrow.classList.toggle("flipArrow");
      catalogOpenBTN.innerHTML = "Открыть фильтр ";
    }else{
      catalogFilter.classList.toggle("shortCatalogFilter");
      catalogArrow.classList.toggle("flipArrow");
      catalogOpenBTN.innerHTML = "Скрыть фильтр";
    }
  });



}

// Проверка на наличие класса у index
if (document.querySelector(".index__page")) {
  // ФИДБЕК СЛАЙДЕР НАЧАЛО
  var FeedBackSwiper = new Swiper(".feedback-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
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
      // when window width is >= 850px
      850: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 520px
      520: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
  // ФИДБЕК СЛАЙДЕР КОНЕЦ
  // QUIZ
  (function () {
    let questions = [
      {
        question: `КАКОЙ ТИП ТЕПЛИЦЫ ВАМ ПОДОЙДЕТ ЛУЧШЕ?`,
        choices: [
          "Ответ первый длинный",
          "Ответ второй",
          "Ответ короткий",
          "Ответ",
        ],
      },
      {
        question: `Пример вопроса о теплице, например, что будете выращивать?`,
        choices: [
          "Ответ первый длинный",
          "Ответ второй",
          "Ответ короткий",
          "Ответ",
        ],
      },
      {
        question: "Вопрос",
        choices: [
          "Ответ первый длинный",
          "Ответ второй",
          "Ответ короткий",
          "Ответ",
        ],
      },
      {
        question: "Вопрос",
        choices: [
          "Ответ первый длинный",
          "Ответ второй",
          "Ответ короткий",
          "Ответ",
        ],
      },
      {
        question: "Вопрос",
        choices: [
          "Ответ первый длинный",
          "Ответ второй",
          "Ответ короткий",
          "Ответ",
        ],
      },
      {
        question: "Конец",
        choices: [],
      },
    ];

    let questionCounter = 0; //Tracks question number
    let selections = []; //Array containing user choices
    let quiz = $("#quiz"); //Quiz div object

    $(".quizBTN").on("click", function () {
      $(".quiz__box-text").addClass("hide");
      $(".quiz__box-btn").addClass("hide");
      $("#quizContainer").css("display", "flex");
    });
    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $("#next").on("click", function (e) {
      e.preventDefault();

      // Suspend click listener during fade animation
      if (quiz.is(":animated")) {
        return false;
      }
      choose();

      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert("Выберете значение");
      } else {
        questionCounter++;
        displayNext();
      }
    });

    // Click handler for the 'prev' button
    $("#prev").on("click", function (e) {
      e.preventDefault();

      if (quiz.is(":animated")) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });

    // Click handler for the 'Start Over' button
    $("#start").on("click", function (e) {
      e.preventDefault();

      if (quiz.is(":animated")) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $("#start").hide();
    });

    // Animates buttons on hover
    $(".QuizButton").on("mouseenter", function () {
      $(this).addClass("active");
    });
    $(".QuizButton").on("mouseleave", function () {
      $(this).removeClass("active");
    });

    // Creates and returns the div that contains the questions and
    // the answer selections
    function createQuestionElement(index) {
      let qElement = $("<div>", {
        id: "question",
      });

      document.querySelector(
        ".quiz__counter"
      ).innerHTML = `<span class="primary">${index + 1}</span>/${
        questions.length
      }`;

      $(".quiz__box-h h2").text(questions[index].question);
      let radioButtons = createRadios(index);
      qElement.append(radioButtons);

      return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      let radioList = $("<ul>");
      let item;
      let input = "";
      for (let i = 0; i < questions[index].choices.length; i++) {
        item = $("<li>");
        input = `<input type="radio" name="answer" id="input__radio${i}" value="${i}"/>`;
        input += `<label for="input__radio${i}">${questions[index].choices[i]}</label>`;
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function () {
        $("#question").remove();

        if (questionCounter < questions.length) {
          let nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!isNaN(selections[questionCounter])) {
            $("input[value=" + selections[questionCounter] + "]").prop(
              "checked",
              true
            );
          }

          // Controls display of 'prev' button
          if (questionCounter === 1) {
            $("#prev").css("display", "flex");
          } else if (questionCounter === 0) {
            $("#prev").css("display", "none");
            $("#next").css("display", "flex");
          }
        } else {
          let scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $("#next").hide();
          $("#prev").hide();
          $("#start").show();
        }
      });
    }
  })();
}