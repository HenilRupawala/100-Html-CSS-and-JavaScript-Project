let typeTextSpan = document.querySelector("#type-text");
const words = ["Awesome", "Fun", "Great", "Easy"];
const typingTime = 200;
const eraseTime = 200;
const wordChangeTime = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) {
    setTimeout(type, wordChangeTime)
  }
})

const type = () => {
  if(charIndex < words[index].length) {
    typeTextSpan.textContent += words[index][charIndex];
    charIndex++;
    setTimeout(type, typingTime)
  } else {
    setTimeout(erase, wordChangeTime)
  }
}

const erase = () => {
  if(charIndex > 0) {
    typeTextSpan.textContent = words[index].substring(0, charIndex-1)
    charIndex--;
    setTimeout(erase, eraseTime);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, wordChangeTime);
  }
}

