function solution(price, money, count) {
    var answer = 0;
    let cnt= 1;
    while(cnt!==count +1) {
        answer+=price *cnt;
        cnt++;
    }
    return answer - money > 0 ? answer-money : 0;
}