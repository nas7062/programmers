const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [...arr] = input;
let result = Array.from({ length: arr.length }).fill(0);
for (let i = 0; i < arr.length; i++) {
        result[arr[i]%42] = 1;
}
const answer = result.filter((item, idx) =>item >0).length;
console.log(answer);