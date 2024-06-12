const navbarBtn = document.querySelector(".navbar-btn")

navbarBtn.addEventListener('click', () => {
  document.querySelector('.navbar-wrapper').classList.toggle('change')
})