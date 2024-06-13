const sliders = document.querySelectorAll('input[type="range"]');
const color = document.querySelector('input[type="color"]');
const output = document.querySelector('#css-code');
const btnCopy = document.querySelector('#copy');

sliders.forEach(slider => {
  slider.addEventListener('input', createBox)
});

color.addEventListener('change', createBox);

btnCopy.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');
  alert('Copied');
})

function createBox() {
  let X = sliders[0].value;
  let Y = sliders[1].value;
  let blurRadius = sliders[2].value;
  let spreadRadius = sliders[3].value;

  let shadowColor = color.value;
  let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;

  document.getElementById('box').style.cssText = `box-shadow: ${boxShadow} ${shadowColor}`;
  output.value = `box-shadow: ${boxShadow}`;
};