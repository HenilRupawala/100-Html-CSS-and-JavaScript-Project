document.querySelector('#btn').addEventListener('click', joke);

async function joke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  }
  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.querySelector('.content').innerHTML = b.joke;
}