'use strict';
'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

function sanitizeFruitBasket(basket, unwantedFruit) {
  return basket.filter(fruit => fruit !== unwantedFruit);
}

// Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    // Save the original contents of the fruit basket
    const originalFruitBasketContents = [...fruitBasket];
    // Run the sanitize function
    sanitizeFruitBasket(fruitBasket, 'lemon');
    // Check if the original fruit basket is unchanged
    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const sanitizedBasket = sanitizeFruitBasket(fruitBasket, 'lemon');
    // Check if the sanitized basket does not contain any 'lemon'
    expect(sanitizedBasket).not.toContain('lemon');
    // Check if the sanitized basket contains all the other fruits
    expect(sanitizedBasket).toEqual(expect.arrayContaining([
      'apple', 'grapefruit', 'banana', 'watermelon'
    ]));
  });
});
