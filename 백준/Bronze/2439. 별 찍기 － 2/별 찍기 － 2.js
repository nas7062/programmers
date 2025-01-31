const input = require("fs").readFileSync("/dev/stdin").toString().trim("");

for(let i=0;i<input;i++) {
  
  let arr ="";
  for(let j =0;j<input-i-1;j++) {
    arr+=" ";
  }
  for(let j =0;j<i+1;j++) {
    arr+="*";
  }
  console.log(arr);
  arr= '';
}