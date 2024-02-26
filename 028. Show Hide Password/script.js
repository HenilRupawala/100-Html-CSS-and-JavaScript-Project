const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");
const eye1 = document.querySelector('#eye1');
const eye2 = document.querySelector('#eye2');


eye1.addEventListener("click", () => {  
  if(password.type === "password"){
    password.type = "text";
  } else {
    password.type = "password";
  }
})

eye2.addEventListener("click", () => {
  if(confirmPassword.type === "password"){
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
})
