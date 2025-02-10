let input = require('fs').readFileSync('/dev/stdin').toString().trim();


let cnt= 1;
let temp =6;
while(input >1) {
  input-=temp;
  cnt++;
  temp+=6;
}
console.log(cnt);