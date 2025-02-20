function solution(arr) {
    var answer = arr.reduce((a,b)=>a+b,0); // reduce로 각 배열 더해줌
    return answer/arr.length ; // arr.length만큼 나눠서 평균 구함
}