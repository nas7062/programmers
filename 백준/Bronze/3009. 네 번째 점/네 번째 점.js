const input = require("fs")
  .readFileSync("dev/stdin", "utf8")
  .trim()
  .split("\n");

let arrX = [];
let arrY = [];

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ");
  arrX.push(Number(x));
  arrY.push(Number(y));
}
arrX = arrX.sort((a, b) => a - b);
arrY = arrY.sort((a, b) => a - b);

let x = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
let y = arrY[0] === arrY[1] ? arrY[2] : arrY[0];

console.log(`${x} ${y}`);
