let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

let docs = document.getElementById('docs');
docs.addEventListener("click", () => {
  window.open('resources/doc/Integrated Project 2 Specification August 2018 V1.0.pdf', '_blank');
});
