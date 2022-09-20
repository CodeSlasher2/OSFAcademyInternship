//
//Query selectors
//
const navDropdown = document.querySelector(".dropdown");
const dropdownBody = document.querySelector(".dropdown-content");
const dropdownContent = document.querySelector(".container-dropdown");
// const toggler = document.querySelector(".product-categories-container");
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
navDropdown.addEventListener("click", (e) => {
  const clicked = e.target;
  dropdownBody.classList.toggle("active");

  if (window.innerWidth < 758) {
    navDropdown.parentElement.classList.add("noborder");
  } else {
    navDropdown.parentElement.classList.remove("noborder");
  }
  if (
    (productButton.classList.contains("active-ul") ||
      saleButton.classList.contains("active-ul")) &&
    !navDropdown.classList.contains("active")
  ) {
    const ActiveUlToggler = document.querySelectorAll(".active-ul");
    ActiveUlToggler.forEach((elem) => elem.classList.remove("active-ul"));
    // productButton.classList.remove("active-ul");
    // saleButton.classList.remove("active-ul");
  }
});

//
//Nav 3rd level controler

const innerNavHandler = function (e) {
  const clicked = e.target.closest(this);
  if (window.innerWidth < 758) {
    clicked.classList.toggle("active-ul");
  }
};

productButton.addEventListener("click", innerNavHandler.bind(".products"));

saleButton.addEventListener("click", innerNavHandler.bind(".sales"));

// 3rd level closer

// navDropdown.addEventListener("click", (e) => {
//   if (e.target.matches(".dropdown")) {
//     dropdownBody.classList.toggle("active");
//   }

// if (
//   (toggler.classList.contains("active-ul") ||
//     togglerSales.classList.contains("active-ul")) &&
//   !dropdownBody.classList.contains("active")
// ) {
//   const ulToggler = document.querySelectorAll(".active-ul");
//   ulToggler.forEach((elem) => elem.classList.remove("active-ul"));
// }
// });

window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".dropdown") &&
    !e.target.closest(".dropdown-content")
  ) {
    dropdownBody.classList.remove("active");
  }
  // activeDrops.forEach((dropdown) => {
  //   console.log(e.target);
  //   if (dropdown === e.target.closest(".dropdown-content")) return;
  //   dropdown.classList.remove("active");
  // });
});

//
//FOOTER
//
/////////////////////////
//activator
/////////////////////////
// document.addEventListener("click", (e) => {
//   const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
//   if (!isDropdownBtn && e.target.closest("[data-dropdown-btn]") !== null)
//     return;
//   let currentDropdown;
//   if (isDropdownBtn && window.innerWidth < 768) {
//     currentDropdown = e.target.closest("[data-dropdown-btn]").parentElement
//       .parentElement;
//     currentDropdown.classList.toggle("active-ul");
//   }
// });

//
//Hamburger Menu + Nav opening
//
