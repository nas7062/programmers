const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const [a,b] = input;

const revA =a.split("").reverse().map(Number).join('');
const revB =b.split("").reverse().map(Number).join('');

 console.log(revA >= revB ? revA : revB);