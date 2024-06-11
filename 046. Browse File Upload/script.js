// upload
const upload = document.querySelector('input')
// image
const image = document.querySelector('.img img')
// close
const close = document.querySelector('.icon .close')

upload.addEventListener('change', () => {
  uploadFile(event)
})

function uploadFile(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  
  image.classList.add("active");
  close.classList.add("exit");

  

  close.addEventListener('click', () => {
    image.classList.remove("active");
    close.classList.remove("exit");
  })
}