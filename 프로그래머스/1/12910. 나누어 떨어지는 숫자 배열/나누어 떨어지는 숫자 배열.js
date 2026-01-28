function solution(arr, divisor) {
    var answer = [];
    let result=  arr.filter((ar)=> ar%divisor ===0 ).sort((a,b)=>a-b);
    
    return result.length ? result : [-1];
}