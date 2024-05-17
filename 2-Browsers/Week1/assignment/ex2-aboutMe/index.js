'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

function details(info) {
  const nickNameElement = document.getElementById('nickname');
  const favFoodElement = document.getElementById('fav-food');
  const homeTownElement = document.getElementById('hometown');

  nickNameElement.textContent = info.nick;
  favFoodElement.textContent = info.favFood;
  homeTownElement.textContent = info.homeTown;
}

function updateListItems() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    item.className = 'list-item';
  });
}
//its a object
function main() {
  const ownInfo = {
    nick: "Azis",
    favFood: "Ayran",
    homeTown: "Adana"
  };


  details(ownInfo);
  
  updateListItems();
}


window.addEventListener('load', main);
