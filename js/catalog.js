let catalogArrow = document.querySelector(".catalog__filter-arrow");
let catalogFilter = document.querySelector(".catalog__filter");

catalogArrow.addEventListener("click", (e) => {
  catalogArrow.classList.toggle("flipArrow");
  catalogFilter.classList.toggle("shortCatalogFilter");
});
