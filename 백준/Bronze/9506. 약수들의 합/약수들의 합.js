const input = require("fs")
  .readFileSync("dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  const num = input[i];
  if (num === -1) break;

  let index = 1;
  const divisors = [];
  while (index < num) {
    if (num % index === 0) divisors.push(index);
    index++;
  }
  const sum = divisors.reduce((a, b) => a + b, 0);

  if (sum === num) console.log(`${num} = ${divisors.join(" + ")}`);
  else console.log(`${num} is NOT perfect.`);
}
