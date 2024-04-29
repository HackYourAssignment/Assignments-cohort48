function addToShoppingCart(cart, item) {
  // Create a copy of the cart to avoid modifying the original (pure function)
  const newCart = [...cart]; 
  newCart.push(item);
  if (newCart.length > 3) {
    newCart.shift();
  }
  return newCart;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('Test 1: addToShoppingCart should take two parameters');
  console.assert(addToShoppingCart.length === 2); // Fixed: function takes 2 arguments
}

function test2() {
  console.log('Test 2: addToShoppingCart should be a pure function');
  const initialCart = ['bananas', 'milk'];
  const result1 = addToShoppingCart(initialCart.slice(), 'chocolate'); // Create copy
  const result2 = addToShoppingCart(initialCart.slice(), 'chocolate'); // Create copy
  console.assert(JSON.stringify(result1) === JSON.stringify(result2));
  console.assert(
    JSON.stringify(initialCart) === JSON.stringify(['bananas', 'milk'])
  );
}

function test3() {
  console.log('Test 3: `chocolate` should be added');
  const initialCart = ['bananas', 'milk'];
  const result = addToShoppingCart(initialCart.slice(), 'chocolate'); // Create copy
  console.assert(result.length === 3);
  console.assert(result.includes('chocolate'));
}

function test4() {
  console.log('Test 4: `waffles` should be added');
  const initialCart = ['bananas', 'milk', 'chocolate'];
  const result = addToShoppingCart(initialCart.slice(), 'waffles'); // Create copy
  console.assert(result.length === 3);
  console.assert(result.includes('waffles'));
}

function test() {
  test1();
  test2();
  test3();
  test4();
}

test();
