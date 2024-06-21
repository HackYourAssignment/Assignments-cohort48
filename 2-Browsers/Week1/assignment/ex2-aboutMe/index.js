'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`,
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

document.getElementById('nickname').textContent = 'Raven';
document.getElementById('fav-food').textContent = 'Pizza';
document.getElementById('hometown').textContent = 'Berlin';

// Iterate through each <li> and change the class to 'list-item'
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
  item.classList.add('list-item');
});
