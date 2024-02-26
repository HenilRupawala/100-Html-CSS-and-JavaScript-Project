const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-list");
const links = document.querySelectorAll(".link");
const pageContainer = document.querySelector(".page-container");
const overlay = document.querySelector(".overlay");
const pages = document.querySelectorAll(".page");

let pageIndex = 0;

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  ul.classList.toggle("show");
  pageContainer.classList.toggle("active")
})

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    nextPage(index)
  })
})

const nextPage = (i) => {
  overlay.style.animation = `slide 1s linear 1`;

  setTimeout(() => {
    pages[pageIndex].classList.remove("active");
    pages[i].classList.add("active");
    pageIndex = i;
  }, 500);

  setTimeout(() => {
    overlay.style.animation = null;
  }, 1000)
}