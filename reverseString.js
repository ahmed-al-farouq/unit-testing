const reverseString = (string) => {
  let arr = string.split('');
  arr.reverse();
  let reversedString = arr.join('');
  return reversedString;
}

module.exports = reverseString;