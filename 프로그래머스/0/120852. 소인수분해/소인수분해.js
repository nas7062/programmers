function solution(n) {
  let result = [];
  let divisor = 2;
  
  while (n >= 2) { // 2보다 클때까지
    if (n % divisor === 0) {  // n이 divisor로 나누어 떨어지면
      result.push(divisor) //result에 push
      n = n / divisor; // n 을 divisor로 나눠줌
    }
     else  // n이 divisor로 나누어 떨어지지 않으면 divisor 증가
        divisor ++;
    
  }
  
  return [...new Set(result)]; // set을 이용해 중복제거 =>(소인수 분해)
}