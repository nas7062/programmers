const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const  [first,second] = input;
const [n,x] = first.split(' ');  
let cnt= second.split(' ').filter((item)=>+item < +x).map(Number).join(' ');
console.log(cnt);