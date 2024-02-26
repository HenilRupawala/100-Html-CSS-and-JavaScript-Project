// const anchor = document.querySelectorAll("a")
// const article = document.querySelectorAll(".tab-content");

// anchor.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     removeActiveclass();
//     item.classList.add("active");
//     article[index].classList.add("content-visible")
//   })
// }
// );

// const removeActiveclass = () => {
//   anchor.forEach((item,index) => {
//     item.classList.remove("active")
//     article[index].classList.remove("content-visible")
//   })
// };
document.addEventListener("click", (e) => {
  if(e.target.matches(".tab-item a")) {
    getTab(e.target);
  }
})

function getTab(el) {
  const active = document.querySelector(".active");
  const visible = document.querySelector(".content-visible");
  const tabContent = document.getElementById(el.href.split("#")[1]);

  active.classList.toggle("active");
  visible.classList.toggle("content-visible");

  el.classList.add("active");
  tabContent.classList.add("content-visible");
}

