const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let arr = Array.from({length:26}).fill(0);
let lowerInput = input.toLowerCase();

for(let i =0;i<lowerInput.length;i++) {
  arr[lowerInput[i].charCodeAt()-97]++;
}

let maxi = Math.max(...arr);
let index = 0;
let result =arr.filter((item,idx)=>{
  if(item ===maxi){
    index = idx;
    return item;
  }
});
if(result.length > 1) {
  console.log("?");
}
else {
  console.log(String.fromCharCode(index+65));
}
console.log();
