function solution(n) {
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''));
    // n을 문자열로 바꾼 후 split sort로 내림차순 해준 다음 문자열로 변환 후 정수형으로 바꿔줌 
}