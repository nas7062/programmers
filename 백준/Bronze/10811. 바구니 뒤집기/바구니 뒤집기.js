const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const [nm, ...arr] = input;
const [n, m] = nm.split(" ");
let result = Array.from({ length: n } ,(_,i)=>i+1);
for (let i = 0; i < m; i++) {
  let [a, b] = arr[i].trim("").split(" ");
  let rev = result.slice(a-1,b).reverse();
  result.splice(a-1,b-a+1,...rev);
  
}
console.log(result.join(' '));