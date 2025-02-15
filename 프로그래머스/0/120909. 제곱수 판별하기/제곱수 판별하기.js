function solution(n) {
    // 제곱근 함수 Math.sqrt()를 이용해 ex)144=>12 
    //나누기 1을 했을 때 0이되면 제곱수 이므로 1 반환 아니면 2반환 
    return Math.sqrt(n) % 1 === 0  ? 1 : 2;
}