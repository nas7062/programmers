function solution(n, left, right) {
    var answer = [];
    for(let i =left;i<=right;i++){
        let p = Math.max(Math.floor(i/n) ,i%n);
        answer.push(p+1)
    }
    return answer;
}