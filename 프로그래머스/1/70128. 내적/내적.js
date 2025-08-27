function solution(a, b) {
    return a.map((item,idx)=>item*b[idx]).reduce((a,b)=>a+ +b,0);
}