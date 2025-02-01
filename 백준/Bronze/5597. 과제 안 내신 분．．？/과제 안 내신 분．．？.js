const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [...arr] = input;
let sortedArr = arr.sort((a,b)=>a-b);
let result =Array.from({length:31}).fill(0);
for(let i=0;i<arr.length;i++) {
        result[sortedArr[i]] =1;
}
result.filter((item,idx)=> {
    if(item ===0 && idx >0)
        console.log(idx);
})
