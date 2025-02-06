const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));
const [n,m] = input.shift();

let newArr = Array.from(Array(n).fill(0), () => Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    newArr[i][j] =input[i][j] +input[n+i][j];
  }
}
let answer= "";
for(let i =0;i<n;i++) {
  for(let j =0;j<m;j++) {
    answer+=newArr[i][j]+ " ";
  }
  answer+="\n";
}
console.log(answer.trim());
