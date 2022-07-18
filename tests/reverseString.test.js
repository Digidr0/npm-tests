const reverseString = require("../js/reverseString");

it("One word", () =>
  reverseString("apple").then((result) => expect(result).toBe("elppa")));

  it("Capitalize", () =>
  reverseString("ORANGE").then((result) => expect(result).toBe("EGNARO")));

  it("Multiple words", () =>
  reverseString("An Apple and an Orange").then((result) => expect(result).toBe("egnarO na dna elppA nA")));

  it("Viod", () =>
  reverseString("").then((result) => expect(result).toBe("")));