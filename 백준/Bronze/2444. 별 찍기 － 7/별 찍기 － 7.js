const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = input;
for (let i = 1; i <= n; i++) {
  let arr = "";

  for (let j = 0; j < n-i; j++) {
    arr += " ";
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    arr += "*";
  }
  console.log(arr);
}
for(let i=1; i<n;i++ ) {
  let arr = "";
  for (let j = 0; j < i; j++) {
    arr += " ";
  }
  for (let j = 0; j < 2* (n-i)-1; j++) {
    arr += "*";
  }
  
  console.log(arr);
}
