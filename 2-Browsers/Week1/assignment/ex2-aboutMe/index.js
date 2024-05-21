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
function updated(info){
  document.querySelector('#nickname').textContent = info.nickname;
  document.querySelector('#fav-food').textContent = info.favfood;
  document.querySelector('#hometown').textContent = info.hometown;
}

function listItems(){
  const li = document.querySelectorAll('li');
  li.forEach (item =>{
    item.className = 'li';
  } )
}


function main(){
  const per={
    nickname: 'bem',
    favfood: 'enjera',
    hometown: 'addis'
  };
  updateListItems();

}