function solution(x) {
    const num = x.toString().split('').reduce((a,b)=>a + +b,0);
    return x% num ? false : true;
}