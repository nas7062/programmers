function solution(arr, divisor) {
    var answer = [];
    for(let ar of arr) {
        if(ar % divisor ===0) {
            answer.push(ar);
        }
    }
    return answer.length >0 ? answer.sort((a,b)=>a-b) : [-1];
}