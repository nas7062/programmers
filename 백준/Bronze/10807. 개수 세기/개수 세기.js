const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const  [n, arr,v] = input;
let cnt= arr.split(' ').filter((item)=>item === v).length;
console.log(cnt);