function solution(a, b) {
    return a.map((item,idx)=>item*b[idx]).reduce((a,b)=>a+b,0);
    // a[0] b[0] 부터 다 곱해 나온 배열은 reduce로 다 더해줌
}