const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [nm,...arr] = input;
const [n,m] = nm.split(' ');
let result = Array.from({length:n} , (_,i)=>i+1);
for(let i =0;i<m;i++) {
    const [a,b] = arr[i].trim('').split(' ').map(Number);
    [result[a-1],result[b-1]] = [result[b-1],result[a-1]];
}

console.log(result.join(' '));