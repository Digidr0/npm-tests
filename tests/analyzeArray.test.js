const analyzeArray = require("../js/analyzeArray");

describe("Analyzing array", () => {
  test("[1,8,3,4,2,6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("[2,5,6,8,10,11]", () => {
    expect(analyzeArray([2, 5, 6, 8, 10, 11])).toStrictEqual({
      average: 7,
      min: 2,
      max: 11,
      length: 6,
    });
  });
});
