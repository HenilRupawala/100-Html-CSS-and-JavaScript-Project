const imgWrapper = document.querySelector(".img-wrapper");
const imgToShow = document.querySelector("#full-image");
const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll("img");

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    imgWrapper.style.display = "flex";
    imgToShow.src = `images/img${index}.jpg`
  })
})

closeBtn.addEventListener("click", () => imgWrapper.style.display = "none")