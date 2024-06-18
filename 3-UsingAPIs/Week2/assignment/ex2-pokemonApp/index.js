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
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json() ;
    

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);
    console.log(data)
    const pokemons = data.results;
    const selectElement = document.createElement('select');
    document.body.appendChild(selectElement);
    
    pokemons.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.url; 
      option.textContent = pokemon.name;
      selectElement.appendChild(option);
    });

    selectElement.addEventListener('change', (event) => {
      fetchImage(event.target.value);
    });

  } catch (error) {
    console.error('Error fetching and populating Pokémon:', error);
  }
}

async function fetchImage(url) {
  try {
    const pokemonData = await fetchData(url);
    const imageUrl = pokemonData.sprites.front_default; 

    let image = document.getElementById('pokemon-image');
    if (!image) {
      image = document.createElement('img');
      image.id = 'pokemon-image';
      document.body.appendChild(image);
    }
    image.src = imageUrl;

  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

function main() {
  fetchAndPopulatePokemons('https://pokeapi.co/api/v2/pokemon?limit=151');
}

window.addEventListener('load', main);
