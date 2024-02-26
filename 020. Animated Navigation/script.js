const toggle = document.querySelector('.icon');
const nav = document.querySelector('#nav')


toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})