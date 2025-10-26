const input = require("fs").readFileSync("dev/stdin", "utf8").trim();

const [x, y, w, h] = input.split(" ");

let right = w - x;
let top = h - y;

console.log(Math.min(Math.min(right, top), Math.min(x, y)));
