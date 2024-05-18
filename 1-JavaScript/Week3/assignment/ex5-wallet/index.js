'use strict';

// Based on an example from: Philipp Beau (@ze_german)

const eurosFormatter = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
});

function createWallet(name, cash = 0) {
  function deposit(amount) {
    cash += amount;
  }

  function withdraw(amount) {
    if (cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    cash -= amount;
    return amount;
  }

  function transferInto(wallet, amount) {
    // ==========================>>>>>>>>> **** if we change this line we don't get the undefined **** <<<<<<<<<<<<<==================================
    console.log(
      `Transferring ${eurosFormatter.format(
        amount
      )} from ${getName()} to ${wallet.getName()}`
    );

    const withdrawnAmount = withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  function reportBalance() {
    console.log(`Name: ${name}, balance: ${eurosFormatter.format(cash)}`);
  }

  const getName = () => name;

  return {
    deposit,
    withdraw,
    transferInto,
    reportBalance,
    getName,
  };
}

const walletJack = createWallet('Jack', 100);
const walletJoe = createWallet('Joe', 10);
const walletJane = createWallet('Jane', 20);

walletJack.transferInto(walletJoe, 50);
walletJane.transferInto(walletJoe, 25);

walletJane.deposit(20);
walletJane.transferInto(walletJoe, 25);

walletJack.reportBalance();
walletJoe.reportBalance();
walletJane.reportBalance();
// * End of exercise code

/*******************************************************************************
 * TODO: Multiple choice: provide your answers by replacing `undefined` with the
 * TODO: letter corresponding to your choice, e.g.  answer: 'a'
 ******************************************************************************/
// prettier-ignore
// eslint-disable-next-line no-unused-vars
const quiz = {
  q1: {
    question: 'At line 26, which variables are in the scope marked Closure?',
    choices: { 
      a: 'There is no scope marked Closure', 
      b: 'cash, name', 
      c: 'amount, this, wallet'
    },
    answer: 'b', // because show cash and name in the createWallet() 
  },
  q2: {
    question: 'What is in the Call Stack, from top to bottom?',
    choices: { 
      a: 'withdraw, anonymous', 
      b: 'anonymous, transferInto', 
      c: 'transferInto, anonymous' 
    },
    answer: 'a',// because that shows which functions are first running and sorting 
  },
  q3: {
    question: 'What tooltip appears when hovering over the third debug button?',
    choices: { 
      a: 'Step into next function call', 
      b: 'Step out of current function', 
      c: 'Step' 
    },
    answer: 'a',
  },
  q4: {
    question: 'What is displayed in the console?',
    choices: { 
      a: 'Transferring € 50,00 from Jack to Joe', 
      b: 'Transferring € 50,00 from Jack to undefined', 
      c: 'Transferring € 50,00 from Jack to Jane' 
    },
    answer: 'a',// line 54  walletJack.transferInto(walletJoe, 50);
  },
  q5: {
    question: 'The owner of the wallet with insufficient funds is:',
    choices: { 
      a: 'Jack', 
      b: 'Joe', 
      c: 'Jane' 
    },
    answer: 'c',// because jane try to more money sending but not enough money dus jane is not enough money
  },
};
