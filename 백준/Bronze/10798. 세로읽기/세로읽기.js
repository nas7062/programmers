const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let len = Math.max(...input.map((line) => line.length)); // 가장 긴 줄의 길이
let index = 0;
let result = "";

while (index < len) {
  for (let i = 0; i < input.length; i++) {
    let temp = input[i][index] || ""; // undefined일 경우 빈 문자열 처리
    if (temp !== " ") {
      result += temp;
    }
  }
  index++;
}

console.log(result);
