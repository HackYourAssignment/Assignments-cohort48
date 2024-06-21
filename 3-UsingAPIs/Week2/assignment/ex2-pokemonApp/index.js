'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise
  syntax in order to get the data from the public API. Errors (HTTP or network
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the
  public API and populate the `<select>` element in the DOM.

`fetchImage`: Use `fetchData()` to fetch the selected image and update the
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main`
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons(url, selectElement) {
  try {
    const data = await fetchData(url);
    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error populating Pokémon:', error);
  }
}

async function fetchImage(url, imgElement) {
  try {
    const data = await fetchData(url);
    imgElement.src = data.sprites.front_default;
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

async function main() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'; // URL to fetch the first 151 Pokémon
  const selectElement = document.querySelector('#pokemon-select');
  const imgElement = document.querySelector('#pokemon-image');

  await fetchAndPopulatePokemons(apiUrl, selectElement);

  selectElement.addEventListener('change', async (event) => {
    const pokemonUrl = event.target.value;
    await fetchImage(pokemonUrl, imgElement);
  });
}

window.addEventListener('load', main);
