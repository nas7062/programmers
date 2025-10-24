const [T, ...input] = require("fs")
  .readFileSync("dev/stdin", "utf8")
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i += 3) {
  const str = input[i];
  const arr = JSON.parse(input[i + 2]);
  let isReverse = false;
  let isError = false;
  for (let c of str) {
    if (c === "R") {
      isReverse = !isReverse;
    }
    if (c === "D") {
      if (arr.length === 0) {
        isError = true;
      }
      if (isReverse) {
        arr.pop();
      } else {
        arr.shift();
      }
    }
  }
  console.log(
    isError ? "error" : JSON.stringify(isReverse ? arr.reverse() : arr)
  );
}
