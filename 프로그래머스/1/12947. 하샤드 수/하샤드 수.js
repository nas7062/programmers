function solution(x) {
    // 자리수를 다 더한 값
    let sum =x.toString().split('').reduce((a,b)=>a+Number(b),0);
    if(x%sum!==0) // 자리수를 다 더한값으로 숫자를 나눠지지 않으면 false
        return false;
    return true; // 나눠지면 true;
}