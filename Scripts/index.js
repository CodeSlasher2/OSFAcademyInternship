//
//Query selectors
//
const navDropdown = document.querySelector(".nav-link-1");
const dropdownBody = document.querySelector(".dropdown-content");
const dropdownContent = document.querySelector(".container-dropdown");
const togglerSales = document.querySelector(".sales");
const activeDrops = document.querySelectorAll(".active");
const hamburgerMenu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav");
const saleButton = document.querySelector(".sales");
const productButton = document.querySelector(".products");
const slides = document.querySelectorAll(".slide-content");
const slider = document.querySelector(".slider-inner");
const dotContainer = document.querySelector(".dots");
//
//Mobile nav opener
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenu.classList.toggle("open");
  mobileNav.classList.toggle("active");
});

//
//Nav opener
document.addEventListener("click", function (e) {
  const clickedDropdown = e.target.closest("[data-dropdown-btn]");

  if (clickedDropdown) {
    if (e.target.closest(".dropdown-content")) return;
    dropdownBody.classList.toggle("active");
  }
  if (!clickedDropdown) {
    dropdownBody.classList.remove("active");
  }

  //
  //3rd level romoval
  if (
    (productButton.classList.contains("active-ul") ||
      saleButton.classList.contains("active-ul")) &&
    !navDropdown.classList.contains("active")
  ) {
    const ActiveUlToggler = document.querySelectorAll(".active-ul");
    ActiveUlToggler.forEach((elem) => elem.classList.remove("active-ul"));
    productButton.classList.remove("active-ul");
    saleButton.classList.remove("active-ul");
  }
});

//
//Nav closer
//

//
//Nav 3rd level controler

const innerNavHandler = function (e) {
  const clicked = e.target.closest(this);
  if (document.documentElement.getBoundingClientRect().width < 758) {
    clicked.classList.toggle("active-ul");
  }
};

productButton.addEventListener("click", innerNavHandler.bind(".products"));

saleButton.addEventListener("click", innerNavHandler.bind(".sales"));

//
//FOOTER
//
const dropDownHandlers = function (e) {
  const isDropdownBtn = e.target.matches(`[data-dropdown-btn-${this}]`);
  if (
    !isDropdownBtn &&
    e.target.closest(`[data-dropdown-btn-${this}]`) !== null
  )
    return;
  let currentDropdown;
  if (isDropdownBtn && window.innerWidth < 768) {
    currentDropdown = e.target.closest(`[data-dropdown-btn-${this}]`)
      .parentElement.parentElement;
    currentDropdown.classList.toggle("active-ul");
  }
};

const footer = document.querySelector(".footer-container");

footer.addEventListener("click", dropDownHandlers.bind("footer"));

//
//Slider
//

let curSlide = 0;
const maxSlides = slides.length - 1;
//
//Slider Controler
//
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activeDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide='${slide}']`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);
activeDot(0);

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

//
//Slider functionality
//

const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else curSlide++;

  goToSlide(curSlide);
  activeDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else curSlide--;

  goToSlide(curSlide);
  activeDot(curSlide);
};

// Slider functionality
setInterval(nextSlide, 5000);

// //
// language functionality
//
const langText = document.querySelector(".selected-option");
const langBtn = document.querySelector(".language-btn");
const langDropdown = document.querySelector(".select-language-dropdown");

const checker = function (e) {
  if (e.target.closest(".language-btn")) {
    langDropdown.classList.add("active-drop");
  }

  document.querySelectorAll(".select-language-1").forEach((btn) => {
    const language = btn.getAttribute("value").toUpperCase();
    if (e.target === btn) {
      langText.innerHTML = `${language}`;
      langDropdown.classList.remove("active-drop");
    }
  });
  // checker();
};

langBtn.addEventListener("click", checker);

////
//Currency functionality
//
const currentCurrency = document.querySelector(".selected-option-2");
const currencyButton = document.querySelector(".currency-btn");
const curencyDropdown = document.querySelector(".currency-dropdown");

const checkerCurrency = function (e) {
  if (e.target.closest(".currency-btn")) {
    curencyDropdown.classList.add("active-drop");
  }

  document.querySelectorAll(".select-currency-1").forEach((btn) => {
    const currency = btn.getAttribute("value").toUpperCase();
    if (e.target === btn) {
      currentCurrency.innerHTML = `${currency}`;
      curencyDropdown.classList.remove("active-drop");
    }
  });
};

currencyButton.addEventListener("click", checkerCurrency);

////
////
//Popular items overlay
////

const productsOverlay = document.querySelectorAll(".card");
const cardOverlay = document.querySelector(".card-overlay");

productsOverlay.forEach((card) =>
  card.addEventListener("mouseover", () => {
    card.appendChild(cardOverlay);
  })
);

///
//Card + favorite
///

const addToCart = document.querySelectorAll(".btn-add-to-card");
const cartNumber = document.querySelector(".cart-counter");
const addToFav = document.querySelector(".btn-add-to-fav");
const favNumber = document.querySelector(".fav-counter");

addToCart.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    cartNumber.textContent = Number(cartNumber.textContent) + 1;
  })
);

addToFav.addEventListener("click", (e) => {
  favNumber.textContent = Number(favNumber.textContent) + 1;
});
