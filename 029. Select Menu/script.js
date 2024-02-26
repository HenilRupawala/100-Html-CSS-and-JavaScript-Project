const selectField = document.querySelector(".select-field");
const selectText = document.querySelector("#select-text");
const arrow = document.querySelector("#arrow-icon");
const list = document.querySelector("#list");
const options = document.querySelectorAll(".options");

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
});

options.forEach((option) => {
  option.onclick = function() {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
});
