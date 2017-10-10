const stickyNav = document.querySelector("#sticky");

const offset = stickyNav.offsetTop;

let scrolledPast = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > offset && !scrolledPast) {
    stickyNav.classList.toggle("stick-nav");
    scrolledPast = true;
  } else if (window.scrollY < offset && scrolledPast) {
    stickyNav.classList.toggle("stick-nav");
    scrolledPast = false;
  }
});
