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
const slides = document.querySelectorAll(".slide-content");
const slider = document.querySelector(".slider-inner");
const dotContainer = document.querySelector(".dots");

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
if (document.querySelectorAll(".slide-content")) {
  createDots();
}

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

if (document.querySelector(".dots")) {
  goToSlide(0);
  activeDot(0);

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
}
//
//Slider functionality
//

const nextSlide = function () {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else curSlide++;
  if (document.querySelector(".slide-content")) {
    goToSlide(curSlide);
    activeDot(curSlide);
  }
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else curSlide--;

  if (document.querySelector(".slide-content")) {
    goToSlide(curSlide);
    activeDot(curSlide);
  }
};

// Slider functionality
if (document.querySelector(".slide-content")) {
  setInterval(nextSlide, 5000);
}
// //
// language functionality
//
const langText = document.querySelector(".selected-option");
const langBtn = document.querySelector(".language-btn");
const langDropdown = document.querySelector(".select-language-dropdown");

const checker = function (e) {
  const clickedDropdown = e.target.closest(".language-btn");

  if (clickedDropdown) {
    langDropdown.classList.toggle("active-drop");
  }

  if (!clickedDropdown) {
    langDropdown.classList.remove("active-drop");
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

document.addEventListener("click", checker);

////
//Currency functionality
//
const currentCurrency = document.querySelector(".selected-option-2");
const currencyButton = document.querySelector(".currency-btn");
const curencyDropdown = document.querySelector(".currency-dropdown");

const checkerCurrency = function (e) {
  const clickedDropdown = e.target.closest(".currency-btn");

  if (clickedDropdown) {
    curencyDropdown.classList.toggle("active-drop");
  }

  if (!clickedDropdown) {
    curencyDropdown.classList.remove("active-drop");
  }

  document.querySelectorAll(".select-currency-1").forEach((btn) => {
    const currency = btn.getAttribute("value").toUpperCase();
    if (e.target === btn) {
      currentCurrency.innerHTML = `${currency}`;
      curencyDropdown.classList.remove("active-drop");
    }
  });
};

document.addEventListener("click", checkerCurrency);

////
////
//Popular items overlay
////

const productsOverlay = document.querySelectorAll(".card");
const cardOverlay = document.querySelector(".card-overlay");
if (cardOverlay) {
  productsOverlay.forEach((card) =>
    card.addEventListener("mouseover", () => {
      card.append(cardOverlay);
    })
  );
}
///
//Card + favorite
///
//
//ACTIVATE LATER
//

const addToCart = document.querySelectorAll(".btn-add-to-card");
const cartNumber = document.querySelector(".cart-counter");
const addToFav = document.querySelector(".btn-add-to-fav");
const favNumber = document.querySelector(".fav-counter");

addToCart.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.classList.contains("cpl__loadmore")) {
      if (Number(document.getElementById("number").value) < 0) return;
      cartNumber.textContent =
        Number(document.getElementById("number").value) +
        Number(cartNumber.textContent);
    } else {
      cartNumber.textContent = Number(cartNumber.textContent) + 1;
    }
  })
);
if (addToFav) {
  addToFav.addEventListener("click", () => {
    favNumber.textContent = Number(favNumber.textContent) + 1;
  });
}
//
//
//Modal window
//
const togglePassword = document.querySelector(".togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

//////
//////
//////Password validation

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var special = document.getElementById("special");
var number = document.getElementById("number-modal");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var specialCharacter = /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/g;
  if (myInput.value.match(specialCharacter)) {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

///
///modal opening close
///
const btnOpenModal = document.querySelector(".openmodal");
const btnCloseModal = document.querySelector(".overlay-blur");
const modal = document.querySelector(".modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hider");
  btnCloseModal.classList.remove("hider");
};

const closeModal = function () {
  modal.classList.add("hider");
  btnCloseModal.classList.add("hider");
};

btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////
////Featured products slider
////
const fpCardsContainer = document.querySelectorAll(".fp-card-slider");
const featureProductsCards = document.querySelectorAll(".card-3");
const leftControler = document.querySelector(".arrow-left");
const rightControler = document.querySelector(".arrow-right");
let curSlidefp = 0;
const maxSlidesfp = fpCardsContainer.length - 1;

const goToSlidefp = function (slide) {
  fpCardsContainer.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlidefp(0);

document.addEventListener("click", (e) => {
  if (e.target.closest(".arrow-left")) prevSlidefp();
  if (e.target.closest(".arrow-right")) nextSlidefp();
});

const nextSlidefp = function () {
  if (curSlidefp === maxSlidesfp) {
    curSlidefp = 0;
  } else curSlidefp++;

  goToSlidefp(curSlidefp);
};

const prevSlidefp = function () {
  if (curSlidefp === 0) {
    curSlidefp = maxSlidesfp;
  } else curSlidefp--;

  goToSlidefp(curSlidefp);
};

// Slider functionality
// setInterval(nextSlidefp, 5000);

////
///Year in footer
///

document.querySelector(".year").innerHTML = new Date().getFullYear();

/// // ///
//
// color-picker
const colorBtn = document.querySelectorAll(".cpl__btn");
const colorBtnContainer = document.querySelector(".color-picker");
const changer = document.querySelector(".filter__part--left");
if (changer) {
  colorBtnContainer.addEventListener("click", (e) => {
    if (e.target.matches(".cpl__btn")) {
      colorBtn.forEach((elem) => elem.classList.remove("active-color"));
      const color = e.target.getAttribute("data-set");
      const coloring = getComputedStyle(
        document.documentElement
      ).getPropertyValue(`--${color}`);
      console.log(coloring);

      changer.style.setProperty("background-color", coloring);
      e.target.classList.add("active-color");
    }
  });
}

///
///
///Input
if (document.getElementById("number")) {
  function increaseValue() {
    let value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : 0;
    value++;
    document.getElementById("number").value = value;
  }

  function decreaseValue() {
    let value = parseInt(document.getElementById("number").value);
    value = isNaN(value)
      ? (document.getElementById("number").value = 0)
      : value;
    value < 1 ? (value = 1) : 0;
    value--;
    document.getElementById("number").value = value;
  }

  document.getElementById("number").addEventListener("change", function (e) {
    if (this.value < 0) {
      this.value = "";
    }
  });
}

const readmoreBtn = document.querySelector(".readmore-btn");
const descriptionText = document.querySelector(".readmore-content");
if (readmoreBtn) {
  readmoreBtn.addEventListener("click", (e) => {
    descriptionText.classList.toggle("readmore-content-active");
    descriptionText.classList.contains("readmore-content-active")
      ? (readmoreBtn.textContent = "Read less")
      : (readmoreBtn.textContent = "Read more");
  });
}
///
///
///TAB

const tabcontainer = document.querySelector(".operations__tab-container");
const tab = document.querySelectorAll(".operations__tab");
const content = document.querySelectorAll(".operations__content");

if (tabcontainer) {
  tabcontainer.addEventListener("click", (e) => {
    if (e.target.closest(".operations__tab")) {
      tab.forEach((tab) => tab.classList.remove("operations__tab--active"));

      content.forEach((elem) =>
        elem.classList.remove("operations__content--active")
      );

      const activeTab = e.target.closest(".operations__tab");
      activeTab.classList.add("operations__tab--active");
      // const dataSet = activeTab.getAttribute("data-tab");
      console.log(activeTab.dataset.tab);
      document
        .querySelector(`.operations__content--${activeTab.dataset.tab}`)
        .classList.add("operations__content--active");
    }
  });
}

const previewContainer = document.querySelector(".preview__container");

const mainPhoto = document.querySelector(".mainfoto");
const previewFotos = document.querySelectorAll(".preview__foto");
previewContainer.addEventListener("click", (e) => {
  console.log(e.target.closest(".preview__foto"));
  if (e.target.matches("img")) {
    previewFotos.forEach((foto) => foto.classList.remove("selected"));
    mainPhoto.setAttribute("src", `${e.target.dataset.setImg}`);
    e.target.closest(".preview__foto").classList.add("selected");
  }
});

///
///
///Expander
const expander = document.querySelector(".expander");
const fullPage = document.querySelector("#fullpage");

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
if (expander) {
  expander.addEventListener("click", function () {
    const imgURL = mainPhoto.getAttribute("src");

    const topValue = document.documentElement.getBoundingClientRect().top;
    fullPage.style.backgroundImage = `url(${imgURL})`;
    fullPage.style.display = "block";
    fullPage.style.top = `${Math.abs(topValue)}px`;

    disableScroll();
  });

  document.querySelector("#fullpage").addEventListener("click", (e) => {
    fullPage.style.display = "none";
    enableScroll();
  });
}
