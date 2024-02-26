const btn = document.querySelector("#btn");
let hex = document.querySelector("#hex");

const randomColor = () => {

  const hexaDecimal = '0123456789ABCDEF';
  let color = '#';

  for (let i=0; i<6; i++) {
    color += hexaDecimal[Math.floor(Math.random() * 16)]
  }

  return color;
}

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
  hex.innerText = randomColor();
})