function solution(x, n) {
    var answer = [];
    while(n) {
        answer.unshift(x*n);
        n--;
    }
    return answer;
}