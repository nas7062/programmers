const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const [arr, index] = input;
console.log(arr[index-1]);
