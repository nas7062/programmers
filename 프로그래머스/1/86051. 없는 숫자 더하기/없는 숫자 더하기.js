function solution(numbers) {
    var answer = 45;
    var sum = numbers.reduce((a,b)=>a+b,0);
    
    return answer-sum;
}