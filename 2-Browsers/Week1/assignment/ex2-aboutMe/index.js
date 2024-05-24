'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/


function replaceInfo(info) {
  document.querySelector('#nickname').textContent = info.nickname;
  document.querySelector('#fav-food').textContent = info.favFood;
  document.querySelector('#hometown').textContent = info.homeTown;
}
function updateListItems() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach((listItem) => (listItem.className = 'list-item'));
  console.log(listItems);
}

function main() {
  const myInfo = {
    nickname: 'Andrey',
    favFood: 'Kebap',
    homeTown: 'Nevsehir',
  };
  replaceInfo(myInfo);
  updateListItems();
  console.log();
}
window.addEventListener('load', main);
