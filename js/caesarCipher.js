function caesarCipher(str, key) {
  let alph = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  let string = str.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      result += alph[(alph.indexOf(string[i]) + key) % alph.length];
    } else result += " ";
  }
  return result;
}
module.exports = caesarCipher;
