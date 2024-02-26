const container = document.querySelector(".content");
let baseURL = "https://source.unsplash.com/random/";
const row = 7;

for(let i = 0; i < row * 3; i++) {
  const img = document.createElement('img');
  img.src = `${baseURL}${randomSize()}`;
  container.appendChild(img);
}

function randomSize() {
  return `${randomNumber()}x${randomNumber()}`
}

function randomNumber() {
  return (Math.floor(Math.random() * 10) + 300);
}