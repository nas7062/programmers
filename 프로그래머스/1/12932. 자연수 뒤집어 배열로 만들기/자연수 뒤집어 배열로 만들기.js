function solution(n) {
    var answer = [];
    return String(n).split("").reverse().map((item)=>+item);
}