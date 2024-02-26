// progress
const progress = document.querySelector(".progress");
// circles
const circles = document.querySelectorAll(".circle");
// Previous Button
const prevBtn = document.querySelector("#prev");
// Next Button
const nextBtn = document.querySelector("#next");

let activeIndex = 1;

window.onload = () => {
  circles[0].classList.add("active");
  circles[0] ? (prevBtn.disabled = true) : (prevBtn.disabled = false);
};

nextBtn.addEventListener("click", () => {
  updateUIOnNext();
});

prevBtn.addEventListener("click", () => {
  updateUIOnPrev();
});

const updateUIOnNext = () => {
  if (activeIndex < circles.length) {
    activeIndex++;
    progress.style.width =
      ((activeIndex - 1) / (circles.length - 1)) * 100 + "%";
    circles[activeIndex - 1].classList.add("active");

    if (activeIndex === circles.length) {
      nextBtn.disabled = true;
    }

    if (activeIndex > 1) {
      prevBtn.disabled = false;
    }
  }
};

const updateUIOnPrev = () => {
  if (activeIndex > 1) {
    activeIndex--;
    progress.style.width =
      ((activeIndex - 1) / (circles.length - 1)) * 100 + "%";
    circles[activeIndex].classList.remove("active");

    if (activeIndex === 1) {
      prevBtn.disabled = true;
    }

    if (activeIndex < circles.length) {
      nextBtn.disabled = false;
    }
  }
};
