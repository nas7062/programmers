function solution(numbers) {
    var answer = 45;
    let num = numbers.reduce((a,b)=>a+ +b,0);
    return answer - num;
}