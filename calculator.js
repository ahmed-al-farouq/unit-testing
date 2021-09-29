// Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
// Write at least 3 tests for each of the calculator methods.
// Group tests for each method using describe() method.

class Calculator {
  add (num1, num2) {
      return num1 + num2;
  }

  subtract (num1, num2) {
    return num1 - num2;
  }

  divide (num1, num2) {
    return num1 / num2;
  }

  multiply (num1, num2) {
    return num1 * num2;
  }
}

const calc = new Calculator();

module.exports = calc;