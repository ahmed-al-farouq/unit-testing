const reverseString = require('../reverseString.js');

test('Make sure output equile to input\'s reverse', () => {
  expect(reverseString('hello')).toBe('olleh');
});