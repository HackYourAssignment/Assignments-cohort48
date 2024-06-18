/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/3-UsingAPIs/Week1#exercise-4-throw-the-dice-for-a-poker-dice-game

For this exercise you should do the following:
  - Refactor the `rollDice()` function to throw five dice in one go, by 
    using `.map()` on the `dice` array to create an array of promises for use 
    with `Promise.all()`.
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Die 3 rolled off the table.

The provided rollDie() function logs the value of a die as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dice 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dice that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  // Refactor this function to roll five dice at once
  const dice = [1, 2, 3, 4, 5];
  const dicePromises = dice.map(rollDie);
  
  return Promise.all(dicePromises)
    .then(results => {
      console.log('Resolved!', results);
      return results;
    })
    .catch(error => {
      console.log('Rejected!', error.message);
      throw error;
    });
}

function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

/*
Explanation:

In the case of a rejected promise, dice that have not yet finished their roll continue to do so because the rollDie() function is asynchronous and the dice roll independently of each other. When Promise.all() is used, it waits for all promises to settle (either resolve or reject), but the asynchronous operations (rolling dice) continue to run to completion. Therefore, even if one die rolls off the table and causes the Promise.all() to reject, the other dice will continue their rolling process and log their results as they finish.
*/
