function fact(num) {
    if(num ===1) 
        return 1; // num이 1이면 1을 그냥 반환
    let sum =1; // 곱하기 위해 0이아닌 1로 초기화
    for(let i =2;i<=num;i++) { // 2부터 num까지 돌며 
        sum*=i; // sum에 곱하기
        if(sum === num)  // sum과 num이 같다면 i를 그냥 반환
            return i;
        else if(sum > num) // sum이 num보다 크다면 최대 팩토리얼인 i-1로 반환
            return i-1;
    }
    
}
function solution(n) {
    return fact(n); // fact함수 반환시켜줌
}