const stringLength = require('../stringLength');

test('Make suer it\'s not empty', () => {
  expect(stringLength("Hello")).not.toBe(0);
});

test('Make suer it\'s not more than 10 characters', () => {
  expect(stringLength("Hello")).not.toBeGreaterThan(10);
});