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
  mobileNav.classList.remove("hider");
  // if()
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
    const activeUlToggler = document.querySelectorAll(".active-ul");
    activeUlToggler.forEach((elem) => elem.classList.remove("active-ul"));
    productButton.classList.remove("active-ul");
    saleButton.classList.remove("active-ul");
  }
});

//
//Nav closer
//
const header = document.querySelector("header");
if (window.innerWidth < 768) {
  let prev = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let current = window.pageYOffset;
    console.log(prev, current);
    if (prev < current) {
      mobileNav.classList.add("hider");
      mobileNav.classList.remove("active");
      hamburgerMenu.classList.remove("open");
    }

    prev = current;
  });
}
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

if (slider) {
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
const overlayChecker = function (cards) {
  cards.forEach((card) =>
    card.addEventListener("mouseover", () => {
      card.append(cardOverlay);
    })
  );
};

if (cardOverlay) {
  overlayChecker(productsOverlay);
}
///
//Card + favorite
///
//
//ACTIVATE LATER
//

const addToCart = document.querySelectorAll(".btn-add-to-card");
const cartNumber = document.querySelector(".cart-counter");

const favNumber = document.querySelector(".fav-counter");

const btnChecker = function () {
  const addToCart = document.querySelectorAll(".btn-add-to-card");
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
};

const addToFav = document.querySelectorAll(".btn-add-to-fav");
// const addToFavChecker = function () {
//   const addToFav = document.querySelectorAll(".btn-add-to-fav");
//   addToFav.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       favNumber.textContent = Number(favNumber.textContent) + 1;
//     });
//   });
// };

// addToCart.forEach((btn) => btn.addEventListener("click"));
if (document.querySelectorAll(".btn-add-to-fav")) {
  const addToFavChecker = function () {
    const addToFav = document.querySelectorAll(".btn-add-to-fav");
    addToFav.forEach((btn) =>
      btn.addEventListener("click", () => {
        favNumber.textContent = Number(favNumber.textContent) + 1;
      })
    );
  };
  addToFavChecker();
  btnChecker();
}
// if (document.querySelectorAll(".btn-add-to-fav")) {

// }
//
//
//Modal windows
//
///MOdal  log in
const togglePassword = document.querySelector(".togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

/////
/////
/////EMAIL VALIDATION
/////
const emailRelease = document.querySelector("#input__timer");
const email = document.querySelector("#userEmail");
let loginticket = 0;
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = function (e) {
  const emailText = this.value;

  if (validateEmail(emailText)) {
    this.style.border = "2px solid #84bc22";
    loginticket = 1;
  } else {
    this.style.border = "2px solid red";
    loginticket = 0;
  }
};

email.addEventListener("input", validate.bind(email));
emailRelease.addEventListener("input", validate.bind(emailRelease));
// emailRelease.addEventListener("input", validate);

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
const allValidators = document.querySelectorAll(".pass__validator");

password.addEventListener("input", () => {
  [...allValidators].every((elem) => elem.classList.contains("valid"))
    ? (password.style.border = "2px solid #84bc22")
    : (password.style.border = "2px solid red");
});

///
///modal opening close
///
const btnOpenModal = document.querySelector(".openmodal");
const btnCloseModal = document.querySelector(".overlay-blur");
const modal = document.querySelector(".modal");
const login = document.querySelector(".btn-login");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hider");
  const top = document.documentElement.getBoundingClientRect().top;
  modal.style.top = `calc(${Math.abs(top)}px + 50%)`;
  btnCloseModal.classList.remove("hider");
  disableScroll();
};

const closeModal = function () {
  modal.classList.add("hider");
  btnCloseModal.classList.add("hider");
  timerModal.classList.add("hider");
  enableScroll();
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

login.addEventListener("click", (e) => {
  if (
    [...allValidators].every((elem) => elem.classList.contains("valid")) &&
    loginticket === 1
  ) {
    closeModal();
    loginticket = 0;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////MODAL timer
const timerToggler = document.querySelector(".clock__wrap");
const timerModal = document.querySelector(".release__modal");
if (timerToggler) {
  timerToggler.addEventListener("click", (e) => {
    if (e.target.closest(".clock__wrap")) {
      timerModal.classList.remove("hider");
      const top = document.documentElement.getBoundingClientRect().top;
      timerModal.style.top = `calc(${Math.abs(top)}px + 50%)`;
      btnCloseModal.classList.remove("hider");
      disableScroll();
    }
  });
}
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

      document
        .querySelector(`.operations__content--${activeTab.dataset.tab}`)
        .classList.add("operations__content--active");
    }
  });
}

const previewContainer = document.querySelector(".preview__container");

const mainPhoto = document.querySelector(".mainfoto");
const previewFotos = document.querySelectorAll(".preview__foto");

if (mainPhoto) {
  previewContainer.addEventListener("click", (e) => {
    if (e.target.matches("img")) {
      previewFotos.forEach((foto) => foto.classList.remove("selected"));
      mainPhoto.setAttribute("src", `${e.target.dataset.setImg}`);
      e.target.closest(".preview__foto").classList.add("selected");
    }
  });
}
///
///
///Expander
const expander = document.querySelector(".expander");
const fullPage = document.querySelector("#fullpage");
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
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

///
///
///Slider for small screen

const currentWidth = document.documentElement.getBoundingClientRect().width;
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

const dotContainerPi = document.querySelector(".dots__pi");
const dotPi = document.querySelector(".dots__dot--pi");

///////////////////////BUG
///////////////////////
//cards.forEach((card) => (card.style.transform = "none"));

// window.removeEventListener("resize", widthChecker);
const widthChecker = function () {
  if (this.width < 768 && !dotPi) {
    createDots(cards, dotContainerPi);
  } else if (this.width > 768) {
    cards.forEach((card) => (card.style.transform = "none"));
  }
};

// const goToSlideChecker = function () {
//   if (this.width < 768 && !dotPi) {
//     createDots(cards, dotContainerPi);
//   } else if (this.width > 768) {
//     cards.forEach((card) => (card.style.transform = "none"));
//   }
// };

window.addEventListener("resize", widthChecker);
if (dotContainerPi && window.innerWidth < 768) {
  const createDots = function (slides, dotContainer) {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot dots__dot--pi" data-slide="${i}"></button>`
      );
    });
  };

  createDots(cards, dotContainerPi);

  const activeDotPi = function (slide) {
    document
      .querySelectorAll(".dots__dot--pi")
      .forEach((dot) => dot.classList.remove("dots__dot--active-2"));
    document
      .querySelector(`.dots__dot--pi[data-slide='${slide}']`)
      .classList.add("dots__dot--active-2");
  };

  const goToSlide = function (slide, elem) {
    elem.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  activeDotPi(0);
  window.addEventListener("resize", widthChecker);
  goToSlide(0, cards);

  dotContainerPi.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot--pi")) {
      const { slide } = e.target.dataset;
      goToSlide(slide, cards);
      activeDotPi(slide);
    }
  });
}

// window.addEventListener("resize", widthChecker);

/////////
/////////json post
/////////

const cardLoad = document.querySelectorAll(".card-load");
const cardText = document.querySelector(".card-text");
const cardRate = document.querySelector(".card-title");

class Card {
  constructor(cardJson) {
    this.src = cardJson.firstElementChild.getAttribute("src");
    this.cardtext = cardJson.querySelector(".card-text").innerHTML;
    this.cardtitle = cardJson.querySelector(".card-title").innerHTML;
  }
}

// let keyvalue='load1'
// const jsonFull = {};
// const load = [];
// cardLoad.forEach(function (card, i) {
//   load[i] = new Card(card);
//   jsonFull.load = load;
// });

// console.log(JSON.stringify(jsonFull));

const loadMoreBtn = document.querySelector(".btn-load-more");
// const cardContainer = document.querySelector(".card-container");

const errHandler = function (msg) {
  loadMoreBtn.textContent = `${msg}`;
};

const requestFunction = function () {
  fetch("https://api.jsonbin.io/v3/b/6333e6455c146d63caabf645", {
    method: "GET",
    headers: {
      "X-Master-Key":
        "$2b$10$.zf8ZL3lYRlP2KIBZ5VpU./cSIf3yph/ysfTuBEfbcch6TMApHYRK",
    },
  })
    .then((response) => response.json())
    .then((data) => adderHTML(data.record.load))
    //
    .catch((err) => {
      console.error(`${err}`);
      errHandler(`Something went wrong...${err.message}`);
    })
    .finally(() => {
      btnChecker();
      addToFavChecker();
    });
  // overlayChecker(productsOverlay);
};
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", requestFunction);
}

const adderHTML = function (data) {
  data.forEach((element) => {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card card-load">
      <div class="card-overlay">
      <div class="overlay-inner">
        <button class="btn-add-to-card btn-hover">
          <img
            src="build/images/products/add-to-cart-btn.png"
            alt="add to cart button"
          />
        </button>
        <button class="btn-add-to-fav btn-hover">
          <img
            src="build/images/products/add-to-fav-btn.png"
            alt="add to favorite button"
          />
        </button>
      </div>
    </div>
      <img
        src="${element.src}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <p class="card-text">${element.cardtext}</p>
        <h5 class="card-title">${element.cardtitle}</h5>
      </div>
    </div>`
    );
  });
};

////
////
/////COOOKIE

// set cookie according to you
var cookieName = "Accepted";
var cookieValue = "1";
var cookieExpireDays = 30;
// when users click accept button
let acceptCookie = document.getElementById("acceptCookie");
if (acceptCookie) {
  acceptCookie.onclick = function () {
    createCookie(cookieName, cookieValue, cookieExpireDays);
  };
  // function to set cookie in web browser
  let createCookie = function (cookieName, cookieValue, cookieExpireDays) {
    let currentDate = new Date();
    currentDate.setTime(
      currentDate.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000
    );
    let expires = "expires=" + currentDate.toGMTString();
    document.cookie =
      cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    if (document.cookie) {
      document.querySelector(".cookie-wrap").style.display = "none";
    } else {
      alert(
        "Unable to set cookie. Please allow all cookies site from cookie setting of your browser"
      );
    }
  };
  // get cookie from the web browser
  let getCookie = function (cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  // check cookie is set or not
  let checkCookie = function () {
    let check = getCookie(cookieName);
    if (check == "") {
      document.querySelector(".cookie-wrap").style.display = "flex";
    } else {
      document.querySelector(".cookie-wrap").style.display = "none";
    }
  };

  const closeBtn = document.querySelector(".fa-xmark");
  const cookieCloser = function () {
    closeBtn.addEventListener("click", () => {
      document.querySelector(".cookie-wrap").style.display = "none";
    });
  };

  window.addEventListener("load", () => {
    setTimeout(() => {
      checkCookie();
      cookieCloser();
    }, 10000);
  });
}
// //////////
// //////////
//////////TIMER
let releaseDate = new Date(2022, 8, 30, 23, 59).getTime();
const timerItems = document.querySelectorAll(".timer__item");

const timerUpdate = function () {
  let currentDate = new Date().getTime();
  let timeLeft = releaseDate - currentDate;
  let months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const arr = [months, days, hours, minutes, seconds];

  timerItems.forEach((item, i) => {
    item.innerHTML = arr[i] < 10 ? "0" + arr[i] : arr[i];
  });

  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("timer-timer").innerHTML = "EXPIRED";
  }
};
timerUpdate();
setInterval(timerUpdate, 1000);

//////
//////
//////email json sender
const submitBtn = document.querySelector(".submit__email");
// let emailCounter = 0;
let newsEmail;
let emailCounter;

function addKeyValue(obj, key, data) {
  obj[key] = data;
}

let newinfo = function () {
  emailCounter++;
  return addKeyValue(newsEmail, `${emailCounter}`, `${emailRelease.value}`);
};

submitBtn.addEventListener("click", () => {
  if (loginticket === 1) {
    //get json
    getEmailCounter();
    //updatejson
    newinfo();
    //post newjson
    postFunction();
  }
});

const postFunction = function () {
  fetch("https://api.jsonbin.io/v3/b/6335db02e13e6063dcba56f1", {
    method: "PUT",
    headers: {
      "X-Master-Key":
        "$2b$10$.zf8ZL3lYRlP2KIBZ5VpU./cSIf3yph/ysfTuBEfbcch6TMApHYRK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newsEmail),
  });
};

const getEmailCounter = function () {
  fetch("https://api.jsonbin.io/v3/b/6335db02e13e6063dcba56f1", {
    method: "GET",
    headers: {
      "X-Master-Key":
        "$2b$10$.zf8ZL3lYRlP2KIBZ5VpU./cSIf3yph/ysfTuBEfbcch6TMApHYRK",
    },
  })
    .then((response) => response.json())
    .then((data) => jsonReader(data.record))
    // .then(console.log(o2))
    .catch((err) => {
      console.error(`${err}`);
      errHandler(`Something went wrong...${err.message}`);
    })
    .finally(() => {
      emailCounter = Object.keys(newsEmail).length;
      timerModal.classList.add("hider");
      btnCloseModal.classList.add("hider");
      enableScroll();
      emailRelease.value = "";
    });
  // overlayChecker(productsOverlay);
};
getEmailCounter();

const jsonReader = function (obj) {
  newsEmail = { ...obj };
  return newsEmail;
};

/////////
/////////
/////////PRINTING

const body = document.querySelector("body");
const removable = document.querySelectorAll(".print__out");
const tabContainer = document.querySelector(".tab__container");
const popularItems = document.querySelector(".popular-items-container-pdp");
const services = document.querySelector(".services-banner");
const printable = document.querySelector(".cpl__container");

const printContent = function () {
  if (tabContainer.parentNode) {
    removable.forEach((elem) => elem.parentNode.removeChild(elem));
    timerToggler.classList.add("hider");
    printable.style.marginTop = "0px";
  }
  window.print();
  body.prepend(header);
  body.append(tabContainer, popularItems, services, footer);
  timerToggler.classList.remove("hider");
  printable.style.marginTop = "70px";
};

document.querySelector(".print").addEventListener("click", printContent);
