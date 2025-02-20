function solution(n) {
    return n.toString().split('').reverse().map(Number);
    //문자열로 바꾼후 split으로 나눈 후 배열 거꾸로 그다음 map을 이용해 정수로 변환
}