const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let reverse = input.split('').reverse().join('');

  if( reverse=== input) {
    console.log(1);
  }
  else {
    console.log(0);
  }

