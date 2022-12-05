const hamburgerBtn = document.querySelector(".hamburger_btn");
const dropDownMenu = document.querySelector(".dropdown-menu");
const h1_text_and_arrow = document.querySelector(".header-content");

function open_closeMenu() {
    console.log("toggle")
    dropDownMenu.classList.toggle("hidden")
    // h1_text_and_arrow.classList.toggle("display_col")
    h1_text_and_arrow.classList.toggle("hidden")
    // dropDownMenu.classList.toggle("display_col")
}


