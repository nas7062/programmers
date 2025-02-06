const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => Number(el)));

let newArr = Array.from(Array(9).fill(0), () => Array(9).fill(0));
let maxi = 0;
let arr =[];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    newArr[i][j] =input[i][j] ;
    if(maxi <=input[i][j]) {
      maxi =input[i][j];
      arr.push(i+1,j+1);
    }
  }
}
console.log(maxi);
console.log(arr[arr.length-2],arr[arr.length-1]);

