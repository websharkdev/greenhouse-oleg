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

