const displayJoke = document.querySelector("#display-joke");
const button = document.querySelector("#get-joke")

button.addEventListener('click', getRandomJoke);

function getRandomJoke() {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";
  ajax.open('GET', url, open);

  ajax.onreadystatechange = () => {
    if (ajax.status === 200 && ajax.readyState === 4) {
      let data = JSON.parse(ajax.responseText);
      displayJoke.innerHTML = `${data.value}`
    } else {
      ajax.onerror = onerror();
    }
  }

  ajax.send();
}

function onerror() {
  displayJoke.textContent = "Something Went Wrong :("
}