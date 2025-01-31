const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
  let idx= 0;
  let cnt =input.length;
while(cnt--){
  let [a, b] = input[idx].split(" ").map(Number);
  if (a === 0 && b === 0) break;
  console.log(`${a + b}`);
  ++idx;
}

