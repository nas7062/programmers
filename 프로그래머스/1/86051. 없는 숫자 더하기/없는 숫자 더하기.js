function solution(numbers) {
    var answer = 45; 
    return answer- numbers.reduce((a,b)=>a+b,0);
}