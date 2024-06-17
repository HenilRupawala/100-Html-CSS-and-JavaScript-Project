const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const url = "https://api.thecatapi.com/v1/images/search"

btn.addEventListener('click', getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  container.classList.add('cats');

  let image = document.createElement('img');
  image.src = photo;
  image.classList.add('random-cats');
  image.alt = photo;
  container.appendChild(image);
};

async function getRandomCats() {
  container.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log('JSON:', json);
    return randomCatPhoto(json)
  } catch (e) {
    console.log('This is an error');
    console.log(e);
  }
}

