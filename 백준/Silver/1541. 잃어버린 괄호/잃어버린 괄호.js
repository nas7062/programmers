const input = require("fs").readFileSync("dev/stdin", "utf8").trim();

const index = input.indexOf("-");

const getSum = (arr) => {
  return arr
    .split(/[\+-]/)
    .map(Number)
    .reduce((a, b) => a + +b, 0);
};

if (index === -1) {
  console.log(getSum(input));
} else {
  const plus = getSum(input.slice(0, index));
  const minus = getSum(input.slice(index + 1));
  console.log(plus - minus);
}
