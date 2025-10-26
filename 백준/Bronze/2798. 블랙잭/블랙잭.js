const [nm, input] = require("fs")
  .readFileSync("dev/stdin", "utf8")
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map(Number);
const arr = input.split(" ").map(Number);
let max = Number.MIN_SAFE_INTEGER;
let sum = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum <= m && sum > max) max = sum;
    }
  }
}

console.log(max);
