function solution(n) {
    var answer = 0;
    n =  n.toString(3).split("").reverse().join('');
    return parseInt(n,3);
}