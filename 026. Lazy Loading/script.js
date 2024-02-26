const loadingText = document.querySelector(".loading-text");
const image = document.querySelector(".background");

let load = 0;
let blur = 100;

// const blurring = () => {
//   load++;
//   if (load > 99) {
//     clearInterval(int);
//   }
//   loadingText.innerText = `${load}%`;
//   loadingText.style.opacity = scale(load, 0, 100, 1, 0);
//   image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// };

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

const blurring = () => {
  if(load<=100 && blur>=0){
    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = blur/100;
    image.style.filter = `blur(${blur}px)`
    load++;
    blur--;
  }
};

let int = setInterval(blurring, 30);
