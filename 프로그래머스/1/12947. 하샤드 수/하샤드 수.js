function solution(x) {
    let sum  =0;
    sum = x.toString().split('').reduce((a,b)=>a+ +b,0);
    return x %sum ? false : true ;
}