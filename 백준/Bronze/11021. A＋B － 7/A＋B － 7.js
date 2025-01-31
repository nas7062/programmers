const input = require("fs").readFileSync("/dev/stdin").toString().trim("").split('\n');
const [n,...arr] = input;


for(let i =0;i<n;i++) {
  let [a,b] =arr[i].split(' ').map(Number);
  console.log(`Case #${i+1}: ${a+b}`);
}