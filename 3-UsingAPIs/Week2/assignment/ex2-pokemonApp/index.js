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
  try{
    const response = await fetch(url);

    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.jason();
    return data;

  } catch(error){
    console.log('Error: ', error);

  }
}

async function fetchAndPopulatePokemons(url) {
  try {
    const data = await fetchData(url);
    const selectElement = document.createElement('select');
    selectElement.id = 'pokemon-select';
    selectElement.classList.add('pokemon-select');
    document.body.appendChild(selectElement);

    data.results.forEach(pokemon => {
      const optionElement = document.createElement('option');
      optionElement.value = pokemon.name;
      optionElement.textContent = pokemon.name;
      selectElement.appendChild(optionElement);
    });
  } catch (error) {
    console.error('Error populating Pokémon select element:', error);
  }
}

async function fetchImage(url) {
  if (document.querySelector('img')) {
    document.querySelector('img').remove();
  }
  try {
    const data = await fetchData(url);
    const imgElement = document.createElement('img');
    imgElement.src = data.sprites.front_default;
    imgElement.classList.add('pokemon-image');
    document.body.appendChild(imgElement);
  } catch (error) {
    console.error('Error fetching and populating image:', error);
  }
}
async function main() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  await fetchAndPopulatePokemons(url);
  const selectElement = document.getElementById('pokemon-select');
  
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  
  const btn = document.createElement('button');
  btn.id = 'get-pokemon';
  btn.classList.add('pokemon-button');
  btn.textContent = 'Catch Pokemon!';
  btn.type = 'submit';
  container.appendChild(btn);
  
  const list = document.createElement('ul');
  list.id = 'pokemon-list';
  list.classList.add('pokemon-list');
  container.appendChild(list);
  
  btn.addEventListener('click', async () => {
    const selectedPokemon = selectElement.value;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    await fetchImage(pokemonUrl);
  });
}

window.addEventListener('load', main);