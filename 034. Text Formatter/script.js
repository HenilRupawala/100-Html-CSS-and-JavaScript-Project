const inputField = document.querySelector("#input-field");
const btns = document.querySelectorAll(".btn");
const outputField = document.querySelector(".output-field");

inputField.addEventListener("keyup", () => {
  outputField.textContent = inputField.value;
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.textContent = inputField.value.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = inputField.value.toLowerCase();
    } else if (btn.classList.contains("capitalized")) {
      outputField.innerHTML = capitalized(inputField.value);
    } else if (btn.classList.contains("bold")) {
      outputField.innerHTML = inputField.value.bold();
    } else if (btn.classList.contains("italic")) {
      outputField.style.textDecoration = "none";
      outputField.innerHTML = inputField.value.italics()
    } else if (btn.classList.contains("underline")) {
      outputField.textContent = inputField.value;
      outputField.style.textDecoration = "underline";
    }
  });
});

const capitalized = (str) => {
  let newStr = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return newStr;
};
