const btns = document.querySelectorAll(".btn")

const body = document.body;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.value;
    changeBackground(number);
  });
})

function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "orange":
      body.classList.add("orange");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    case "purple":
      body.classList.add("purple");
      break;
  }
}