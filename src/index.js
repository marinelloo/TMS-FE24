const hamburger = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".header__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navbarLinks.classList.toggle("active");
}
