const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const  [n,arr] = input;
let arrSplit = arr.split(' ');
console.log(Math.min(...arrSplit),Math.max(...arrSplit));