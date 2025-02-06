const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split(' ');
let [n,b] = input;

let result = parseInt(n,10).toString(b).toUpperCase(  );

console.log(result);