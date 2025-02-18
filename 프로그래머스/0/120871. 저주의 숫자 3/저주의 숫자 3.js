function solution(n) {
    var answer = 0;
    for(let i =1;i<=n;i++) {
        answer++;
        if(i%3===0 || String(i).includes('3')) // 3의 배수나 3이 들어가면 n++;
            n++;
    }
    return answer;
}