const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split(' ');
let [n,b] = input;

let result = parseInt(n,b);

console.log(result);