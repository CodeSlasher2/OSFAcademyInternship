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
    console.log(e.target);
    currentDropdown.classList.toggle("active");
  }
});
