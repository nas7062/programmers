const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let peace = [1,1,2,2,2,8];
let result = [];
for(let i=0;i<peace.length;i++) {
  result[i] =peace[i] -input[i];
}
console.log(result.join(' '));