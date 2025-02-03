const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const [n, arr] = input;
const score = arr.split(" ").map(Number);
let maxi = Math.max(...score);
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += (score[i] / maxi) * 100;
}
console.log(sum / n);
