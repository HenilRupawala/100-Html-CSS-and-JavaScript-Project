const copyBtn = document.querySelector(".copyBtn");
const copyText = document.querySelector("#copyText");
const moveBtn = document.querySelector(".moveBtn");
const moveText = document.querySelector("#moveText");


copyBtn.addEventListener("click", () => {
  copyToClipboard(copyText);
});

moveBtn.addEventListener("click", () => {
  moveText.value = copyText.value;
});

const copyToClipboard = (ele) => {
  
  ele.select();
  document.execCommand('copy')

  const outputContainer = document.createElement('div');
  document.body.appendChild(outputContainer);
  outputContainer.innerHTML = `<h3>Content Copied</h3>`
  outputContainer.classList.add('active');

  setTimeout(() => {
    outputContainer.classList.toggle('active');
    document.body.removeChild(outputContainer);
  }, 2000);
}



