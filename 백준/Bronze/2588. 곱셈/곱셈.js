const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let a=input[0];
let b=input[1];

let one =a*(b%10);
let two = a*((Math.floor(b/10))%10);
let three =a*(Math.floor(b/100));
console.log(one); 
console.log(two); 
console.log(three);
console.log(one+(two*10)+(three*100)); 
