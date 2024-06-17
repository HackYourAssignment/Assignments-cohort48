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
  // complete this function
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function fetchAndPopulatePokemons() {
  // complete this function
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
    const selectElement = document.getElementById('pokemon-select');

    data.results.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url;
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    selectElement.style.display = 'block';
    document.getElementById('get-pokemon').style.display = 'none';
    document.getElementById('reset').style.display = 'inline';

    selectElement.addEventListener('change', (event) => {
      fetchImage(event.target.value);
    });
  } catch (error) {
    console.error('Error populating pokemons:', error);
  }
}

async function fetchImage(url) {
  // complete this function
  try {
    const data = await fetchData(url);
    const imageElement = document.getElementById('pokemon-image');

    const imageUrl = data.sprites?.front_default;
    const imageAlt = data.name || 'No name available';

    if (imageUrl) {
      imageElement.src = imageUrl;
      imageElement.alt = imageAlt;
      console.log(`Image source set to: ${imageUrl}`);
    } else {
      throw new Error(`Image not found for this Pokemon: ${imageAlt}`);
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    const imageElement = document.getElementById('pokemon-image');
    imageElement.src = 'https://via.placeholder.com/300';
    imageElement.alt = 'No image available';
  }
}
function resetApp() {
  const selectElement = document.getElementById('pokemon-select');
  const imageElement = document.getElementById('pokemon-image');
  const getPokemonButton = document.getElementById('get-pokemon');
  const resetButton = document.getElementById('reset');

  selectElement.innerHTML = '<option value="">Select a Pokemon</option>';
  selectElement.style.display = 'none';
  imageElement.src = '';
  imageElement.alt = 'Pokemon Image';
  getPokemonButton.style.display = 'inline';
  resetButton.style.display = 'none';
}
async function main() {
  //complete this function
  document.getElementById('get-pokemon').addEventListener('click', fetchAndPopulatePokemons);
  document.getElementById('reset').addEventListener('click', resetApp);
}

window.addEventListener('load', main);