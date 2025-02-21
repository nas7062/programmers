function solution(n) {
    var answer = 0;
        // 3진법 변환 후 나눈 후 뒤집고 다시 문자열로
    answer =n.toString(3).split('').reverse().join('');
    answer =parseInt(answer,3);
    // 그 후 다시 10진법으로 
    return answer;
}