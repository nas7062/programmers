const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("").split('\n');
const [n,str] = input;
console.log(str.toString().split('').reduce((a,b)=>a+ +b,0));