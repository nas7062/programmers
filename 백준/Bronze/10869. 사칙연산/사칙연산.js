const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let a = input[0];
let b = input[1];
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);