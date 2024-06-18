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
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(selectElementId) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const data = await fetchData(url);
  const selectElement = document.getElementById(selectElementId);
  data.results.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon.url;
    option.text = pokemon.name;
    selectElement.appendChild(option);
  });
}

async function fetchImage(imageElementId, pokemonUrl) {
  try {
    const data = await fetchData(pokemonUrl);
    const imageUrl = data.sprites.front_default || 'placeholder-image-url';
    const imageElement = document.getElementById(imageElementId);
    imageElement.src = imageUrl;
  } catch (error) {
    console.log(error);
  }
}

function main() {
  const selectElementId = 'pokemon-select';
  const imageElementId = 'pokemon-image';

  fetchAndPopulatePokemons(selectElementId);

  const selectElement = document.getElementById(selectElementId);
  selectElement.addEventListener('change', (event) => {
    const pokemonUrl = event.target.value;
    console.log(pokemonUrl);
    console.log(event.target.selectedOptions[0]);
    fetchImage(imageElementId, pokemonUrl);
  });
}
window.addEventListener('load', main);
