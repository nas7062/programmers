const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");

let index =0;
let max = Math.max(...input);
input.forEach((item,idx)=> {
  if(+item === +max){
    index =idx+1;
  }
})
console.log(max,index);