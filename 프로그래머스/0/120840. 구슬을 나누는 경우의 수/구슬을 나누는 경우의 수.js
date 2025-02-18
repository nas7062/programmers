
3
4
5
6
7
8
9
10
11
function solution(balls, share) {
    function fac(n){
        let sum = 1;
        for(let j = 2; j <= n; j++)  // 팩토리얼 2부터 n 까지 곱해줌 
            sum *= j; 
        return sum;
    }
    var answer = Math.round(fac(balls) / (fac(balls-share) * fac(share)));

    return answer;
}
