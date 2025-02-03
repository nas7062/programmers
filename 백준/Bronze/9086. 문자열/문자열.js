const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const [n, ...arr] = input;

for(let i =0;i<n;i++){
  let start =arr[i].trim("").slice(0,1);
  let end =arr[i].trim("").slice(-1);
  console.log(start+end);
}
