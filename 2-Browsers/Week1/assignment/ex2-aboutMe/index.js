'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
// Dom content loaded the means in javascript file can in the browser changed and access js code
document.addEventListener('DOMContentLoaded' , function(){

  function updateProfile(){
    const nickName = document.getElementById('nick-name');
    nickName.textContent = 'Mahtab';
    nickName.parentNode.classList.add('list-item');

    const favFood = document.getElementById('fav-food');
    favFood.textContent = 'pizza';
    favFood.parentNode.classList.add('list-item');

    const homeTown = document.getElementById('home-town');
    homeTown.textContent = 'haarlem';
    homeTown.parentNode.classList.add('list-item');
  }
  updateProfile();
})