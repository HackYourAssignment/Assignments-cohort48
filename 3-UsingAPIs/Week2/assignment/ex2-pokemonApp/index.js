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
function fetchData(url) {
  return fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error in network response');
          }
          return response.json();
      })
      .catch(error => {
              console.error(`Fetch error: ${error.message}`);
              // return null;
          }
      )
}

async function fetchAndPopulatePokemons() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
      try {
          const data = await fetchData(url);

          if (data) {
              const selectElement = document.createElement('select');
              selectElement.id = 'pokemon-selector';


              data.results.forEach(pokemon => {
                  const option = document.createElement('option');
                  option.value = pokemon.url;
                  option.textContent = pokemon.name;
                  selectElement.appendChild(option);
              });

              selectElement.addEventListener('change', event => {
                  const url = event.target.value;
                  fetchImage(url);
              });

              const selectorContainerElement = document.getElementById('selector-container');
              selectorContainerElement.appendChild(selectElement);
          }
      } catch (error) {
          console.error(`Error populating the list with pokemons: ${error.message}`);
      }
}

async function fetchImage(url) {
    try {
        const data = await fetchData(url);
        if (data) {
            //console.log(`Creating the img element`);
            let imgElement = document.querySelector('img');
            if (!imgElement) {
                imgElement = document.createElement('img');
                document.body.appendChild(imgElement);
                //console.log(`Appended img to body`)
            }
            //console.log(data);
            imgElement.src = data.sprites.back_default;

        }
    } catch (error) {
        console.error(`Error fetching image: ${error.message}`);
    }
}

async function main() {
    const getPokemonBtn = document.createElement('button');
    getPokemonBtn.id = 'get-pokemon-btn';
    getPokemonBtn.textContent = 'Get Pokemon!';
    document.body.appendChild(getPokemonBtn);

    const selectorContainer = document.createElement('div');
    selectorContainer.id = 'selector-container';
    selectorContainer.style.display = 'none';
    document.body.appendChild(selectorContainer);

    getPokemonBtn.addEventListener('click', async () => {
        selectorContainer.style.display = 'block';
        await fetchAndPopulatePokemons();
    })
}

main();

