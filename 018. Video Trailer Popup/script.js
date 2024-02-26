const play = document.querySelector('.play-btn');
const closeBtn = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');
const video = document.querySelector('video')

play.addEventListener('click', () => {
  trailerContainer.classList.add('active');
  video.play();
})

closeBtn.addEventListener('click', () => {
  trailerContainer.classList.remove('active');
  video.pause();
  video.currentTime = 0;
})