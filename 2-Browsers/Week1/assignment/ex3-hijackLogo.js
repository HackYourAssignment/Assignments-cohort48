'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/

// TODO your code goes in here
function hijackGoogleLogo() {
  const googleLogo = document.querySelector('img[alt="Google"]');
  if (googleLogo) {
    googleLogo.setAttribute('src', 'hackyourfuture_logo.png');
    googleLogo.setAttribute('srcset', 'hackyourfuture_logo.png');
  }
}

hijackGoogleLogo();
