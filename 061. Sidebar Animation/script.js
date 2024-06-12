const menuBtn = document.getElementById("menu");
const sidedbar = document.getElementById("sidebar");
const content = document.getElementById("content");

menuBtn.addEventListener('click', () => {
  sidedbar.classList.toggle('active');
  content.classList.toggle('active');
})