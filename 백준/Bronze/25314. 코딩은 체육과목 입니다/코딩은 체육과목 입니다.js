const input = require("fs").readFileSync("/dev/stdin").toString().trim("");
let numInput = input;
let arr = "";
if(numInput %4 !==0) return;
while (numInput) {
  numInput-=4;
  arr+="long ";
  
}
arr += "int";
console.log(arr);
