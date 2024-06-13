const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signup-form');
const loginBtn = document.querySelector('.login button');
const signUpBtn = document.querySelector('.signup button');
const backLayer = document.querySelector('.back-layer');

signUpBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
  signUpForm.classList.add('active');
  backLayer.style.clipPath = "inset(0 0 0 50%)"
})

loginBtn.addEventListener('click', () => {
  signUpForm.classList.remove('active');
  loginForm.classList.add('active');
  backLayer.style.clipPath = "";
})