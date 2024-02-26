const menu = document.querySelector(".menu");
const links = document.querySelectorAll("li")
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
  if(btn.dataset.open === "close") {
    menu.style.clipPath = "circle(100% at 50% 50%)";
    btn.dataset.open = "open";
  } else {
    menu.style.clipPath = "";
    btn.dataset.open = "close";
  }
});
