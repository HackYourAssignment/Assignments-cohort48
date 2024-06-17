/*
Full description at:https://github.com/HackYourFuture/Assignments/blob/main/3-UsingAPIs/Week2/README.md#exercise-6-using-the-browser-debugger
*/

'use strict';

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('Data fetched successfully:', data);
      return data;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  } 
  catch (error) {
    console.error('Fetch error:', error);
    throw error;
  } 
}

function createAndAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'text') {
      elem.textContent = value;
    } else {
      elem.setAttribute(key, value);
    }
  });
  return elem;
}

function addTableRow(table, label, value) {
  const tr = createAndAppend('tr', table);
  createAndAppend('th', tr, { text: label });
  createAndAppend('td', tr, { text: value });
}

function renderLaureate(ul, { knownName, birth, death }) {
  const li = createAndAppend('li', ul);
  const table = createAndAppend('table', li);
  addTableRow(table, 'Name', knownName?.en);
  addTableRow(table, 'Birth', `${birth?.date}, ${birth?.place?.locationString}`);
  addTableRow(table, 'Death', `${death?.date}, ${death?.place?.locationString}`);
}

function renderLaureates(laureates) {
  console.log('Rendering laureates:', laureates); 
  const ul = createAndAppend('ul', document.body);
  laureates.forEach((laureate) => renderLaureate(ul, laureate));
}

async function fetchAndRender() {
  try {
    const data = await getData('https://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en');
    renderLaureates(data.laureates); 
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

window.addEventListener('load', fetchAndRender);
