const capitalize = require('../capitalize.js');

test('Check if the first letter is capital', () => {
  expect(capitalize('hello')).toBe('Hello');
});
