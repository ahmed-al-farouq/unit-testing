const calc = require('../calculator.js');

describe('add tests', () => {
  test('add two positive nums', () => {
    expect(calc.add(1,2)).toBe(3);
  });

  test('add two negative nums', () => {
    expect(calc.add(-1,-2)).toBe(-3);
  });

  test('add one positive num and one negative num', () => {
    expect(calc.add(1,-2)).toBe(-1);
  });
});

describe('subtract tests', () => {
  test('subtract two positive nums', () => {
    expect(calc.subtract(2, 2)).toBe(0);
  });

  test('subtract two negative nums', () => {
    expect(calc.subtract(-1, -2)).toBe(1);
  });

  test('subtract one negative num and one positive num', () => {
    expect(calc.subtract(-1, 2)).toBe(-3);
  });
});

describe('divide tests', () => {
  test('divide two positive nums', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });

  test('divide two negative nums', () => {
    expect(calc.divide(-1, -2)).toBe(0.5);
  });

  test('divide one negative num and one positive num', () => {
    expect(calc.divide(-1, 2)).toBe(-0.5);
  });
});

describe('multiply tests', () => {
  test('multiply two positive nums', () => {
    expect(calc.multiply(2, 2)).toBe(4);
  });

  test('multiply two negative nums', () => {
    expect(calc.multiply(-1, -2)).toBe(2);
  });

  test('multiply one negative num and one positive num', () => {
    expect(calc.multiply(-1, 2)).toBe(-2);
  });
});