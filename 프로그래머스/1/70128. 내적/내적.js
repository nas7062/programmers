function solution(a, b) {
    var answer = 0;
    return a.map((item,idx)=>item*b[idx]).reduce((a,b)=>a+b,0);
}