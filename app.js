const burgerBtn = document.querySelector(".burger-button");
let line = document.querySelectorAll(".line");
let NavRight = document.querySelector(".nav-right");
let pageLinks = document.querySelectorAll(".links");

burgerBtn.addEventListener("click", () => {
  line.forEach((i) => {
    i.classList.toggle("active");
  });
  NavRight.classList.toggle("show-nav");
});

pageLinks.forEach((i) => {
  i.addEventListener("click", () => {
    NavRight.classList.remove("show-nav");
  });
});
