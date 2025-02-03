const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("");
let result = Array.from({ length: 26 }).fill(-1);
for (let i = 0; i < input.length; i++) {
  let p = input[i].charCodeAt() - 97;
  if (result[p] === -1) {
    result[p] = i;
  }
}
console.log(result.join(" "));
