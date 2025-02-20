function solution(n)
{
    return n.toString().split('').reduce((a,b)=>a + Number(b),0); 
    // 문자열로 변환 => split으로 나누고 => reduce로 사용해 다 더해줌 이때 문자열 상태이기 떄문에 Number로 정수변환
}