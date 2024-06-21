'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
------------------------------------------------------------------------------*/
const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function renderLaureate({ knownName, birth = {}, death = {} }) {
  console.log(`\nName: ${knownName?.en || 'Unknown'}`);
  console.log(`Birth: ${birth.date || 'Unknown'}, ${birth.place?.locationString || 'Unknown'}`);
  console.log(`Death: ${death.date || 'Unknown'}, ${death.place?.locationString || 'Unknown'}`);
}

function renderLaureates(laureates) {
  laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  try {
    const data = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(data.laureates || []);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

fetchAndRender();