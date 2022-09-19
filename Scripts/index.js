//
//NAV
//
const navDropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".container-dropdown");
let dropDownChilds = dropdownContent.children;

const dropdownOpener = function () {
  navDropdown.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.matches(".dropdown");
  if (!isDropdownBtn && e.target.closest(".dropdown") !== null) return;
});

//
//FOOTER
//
document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.matches("[data-dropdown-btn]");
  if (!isDropdownBtn && e.target.closest("[data-dropdown-btn]") !== null)
    return;
  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[data-dropdown-btn]").parentElement
      .parentElement;
    // console.log(e.target);
    currentDropdown.classList.toggle("active");
  }
});

//
//Hamburger Menu
//
const hamburgerMenu = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  hamburgerMenu.classList.toggle("open");
  mobileNav.classList.toggle("active");
});
