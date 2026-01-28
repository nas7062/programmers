function solution(numbers) {
    var answer = 45;
    let nums = numbers.reduce((a,b)=> a+ +b,0);
    return answer-nums;
}