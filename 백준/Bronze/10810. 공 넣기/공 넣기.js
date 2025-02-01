const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [nm,...arr] = input;
const [n,m] = nm.split(' ');
let result = Array.from({length:n}).fill(0);
for(let i =0;i<m;i++) {
    const [a,b,c] = arr[i].trim('').split(' ').map(Number);
    for(let j=a-1;j<b;j++) {
        result[j] = c;
    }
}
console.log(result.join(" "));