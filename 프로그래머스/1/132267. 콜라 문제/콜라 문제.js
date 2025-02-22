function solution(a, b, n) {
    var answer = 0;
    while(n>=a) { // 콜라 빈병의 개수가 교환가능할 때 까지 
        n-=a; // 빈병 a개를 빼고 
        n+=b; // b개를 받아옴 
        answer+=b; // 받아온 콜라 체크
    }
    return answer;
}