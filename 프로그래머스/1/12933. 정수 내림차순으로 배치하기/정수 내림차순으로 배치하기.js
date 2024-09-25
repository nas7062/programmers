function solution(n) {
    var answer = 0;
    let result= String(n).split("").map((item)=>+item).sort((a,b)=>b-a).join("");
    return +result;
}