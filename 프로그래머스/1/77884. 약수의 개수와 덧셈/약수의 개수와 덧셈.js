function solution(left, right) {
    var answer = 0;
    for(let i=left;i<=right;i++) { // left 부터 right까지 순환 
        let cnt= 0;
        for(let j=1;j<=i;j++) { 
            if(i % j ===0)
                cnt++;
        }
        if(cnt %2 === 1) //약수의개수 홀수면 -
            answer-=i;
        else // 짝수면 +
            answer+=i;
    }
    return answer;
}