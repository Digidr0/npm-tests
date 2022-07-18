function reverseString(string) {
    return Promise.resolve(
      string.split("").reverse().join('')
    );
  }
  
  module.exports = reverseString;