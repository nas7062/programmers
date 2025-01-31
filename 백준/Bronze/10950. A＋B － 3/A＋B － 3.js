const  input = require('fs').readFileSync('/dev/stdin').toString().trim('').split('\n');
const [n,...arr] =input;

for(let i =0;i<n;i++) {
   let num = arr[i].split(' ');
   console.log(Number(num[0])+ Number(num[1]));
}
