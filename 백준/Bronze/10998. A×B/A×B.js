const input =require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const a = input[0];
const b=  input[1];
console.log(a*b);