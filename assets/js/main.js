// Slider for pancakes
var swiper = new Swiper(".pancakes-swiper", {
  cssMode: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

// mobile navbar toggle
const navbar = document.getElementById("navbar");
const mobileNav = document.getElementById("mobile-nav-toggle");

mobileNav.addEventListener("click", function () {
  navbar.classList.toggle("navbar-mobile");
  mobileNav.classList.toggle("bi-list");
  mobileNav.classList.toggle("bi-x");
});
