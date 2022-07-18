const capitalize = require("../js/capitalize");

it("One word", () =>
  capitalize("apple").then((result) => expect(result).toBe("Apple")));
  
  it("Multiple words", () =>
  capitalize("apple and an orange").then((result) => expect(result).toBe("Apple and an orange")));

  it("All CAP", () =>
  capitalize("APPLE").then((result) => expect(result).toBe("APPLE")));

  it("Random CAPS", () =>
  capitalize("aPpLe").then((result) => expect(result).toBe("APpLe")));