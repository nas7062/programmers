const  input = require('fs').readFileSync('/dev/stdin').toString().trim('').split('\n');
const [total,num,...arr] = input;

let result = 0;
for(let i =0;i<num;i++) {
    let [price,num] =arr[i].split(' ');
    result+=price *num;
}
if(result === +total) console.log("Yes");
else console.log("No");
