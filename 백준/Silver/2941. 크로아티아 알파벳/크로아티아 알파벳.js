let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr =["c=","c-","dz=","d-","lj","nj","s=","z="];

for(let x of arr) {
        input = input.replaceAll(x,"@");
}
console.log(input.length);