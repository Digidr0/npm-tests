function capitalize(string) {
    return Promise.resolve(
      string.charAt(0).toUpperCase() + string.slice(1)
    );
  }
  
  module.exports = capitalize;