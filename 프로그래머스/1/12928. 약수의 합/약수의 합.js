function solution(n) {
    var answer = 0;
    for(let i =1;i<=n;i++) { // 약수를 구하고 answer에 더하기
        if(n%i===0)
            answer+=i;
    }
    return answer;
}