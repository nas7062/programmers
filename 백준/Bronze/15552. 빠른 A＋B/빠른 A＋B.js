const input = require("fs").readFileSync("/dev/stdin").toString().trim("").split('\n');
const [n,...arr] = input;
let result ="";
for(let i =0;i<n;i++) {
  let [a,b] = arr[i].split(' ').map(Number);
  result += a+b +"\n";
}
console.log(result);