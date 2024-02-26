const signUpBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');

signUpBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show-modal');
})

window.addEventListener('click', (evt) => {
  evt.target === modal ? modal.classList.remove('show-modal') : false
})

