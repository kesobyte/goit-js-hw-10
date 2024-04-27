import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

//Breed selection
function chooseBreed(data) {
  fetchBreeds(data)
    .then(data => {
      //See data in console
      //console.log(data);
      loaderEl.classList.replace('loader', 'is-hidden');

      let optionsMarkup = data.map(({ name, id }) => {
        return `<option value ='${id}'>${name}</option>`;
      });

      breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);
      breedSelectEl.classList.remove('is-hidden'); //Show select after loading
    })
    .catch(onError);
}
//Load breed selection
chooseBreed();

//Event of selecting breed
breedSelectEl.addEventListener('change', createMarkup);

function onError() {
  // Show error Message
  errorEl.classList.remove('is-hidden');
  //   Hide select element
  breedSelectEl.classList.add('is-hidden');
}

//HTML Markup Creation upon selecting breed
function createMarkup(event) {
  loaderEl.classList.replace('is-hidden', 'loader');
  catInfoEl.classList.add('is-hidden');

  //Target event & selection value
  //console.log(event.target);
  //console.log(event.target.value);
  const breedId = event.target.value;

  fetchCatByBreed(breedId)
    .then(data => {
      loaderEl.classList.replace('loader', 'is-hidden');

      const { url, breeds } = data[0];
      const { name, description, temperament } = breeds[0];

      catInfoEl.innerHTML = `
      <img src="${url}" alt="${name}" width="400" class="img-style"/>
      <div class="box">
        <h2>${name}</h2>
        <p>${description}</p>
        <p><strong>Temperament:</strong> ${temperament}</p>
      </div>
      `;
      catInfoEl.classList.remove('is-hidden');
    })
    .catch(onError);
}
