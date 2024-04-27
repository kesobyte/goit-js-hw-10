const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_hIaFrgsqcaK0hisTHTomY8WRo85jkUlzkiwB3zBuQ9oT2V7iVFJP2qp3KAXh3hus';

//Fetch breed list
export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

//Fetch breed images
export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
