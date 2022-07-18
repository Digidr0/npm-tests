const caesarCipher = require("../js/caesarCipher");

describe("Caesar Cipher", () => {
  test("Letter a 1", () => {
    expect(caesarCipher("a", 1)).toBe("b");
  });
  test("Letter b 2", () => {
    expect(caesarCipher("b", 2)).toBe("d");
  });
  test("Letter c 3", () => {
    expect(caesarCipher("c", 3)).toBe("f");
  });
  test("Letter d 4", () => {
    expect(caesarCipher("d", 4)).toBe("h");
  });
  test("Letter z 5 ", () => {
    expect(caesarCipher("z", 5)).toBe("e");
  });
  test("Apple 3", () => {
    expect(caesarCipher("Apple", 3)).toBe("dssoh");
  });
  test("Apple 10", () => {
    expect(caesarCipher("Apple", 10)).toBe("kzzvo");
  });
  test("Multiple words 5", () => {
    expect(caesarCipher("Apple and an orange", 5)).toBe("fuuqj fsi fs twfslj");
  });
});