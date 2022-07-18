function analyzeArray(arr) {
  if (arr === undefined || arr.length === 0) {
    throw new Error("Empty array");
  }
  return {
    average: arr.reduce((prev, curr) => prev + curr) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
module.exports = analyzeArray;

