const  input = require('fs').readFileSync('/dev/stdin').toString().trim('');
let num =0;
for(let i =1;i<=input;i++) {
   num+=i;
}
console.log(num);
