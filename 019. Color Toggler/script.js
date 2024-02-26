const toggler = document.querySelector('#switch');

console.log(toggler)
toggler.addEventListener('click', () => {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
  }
})