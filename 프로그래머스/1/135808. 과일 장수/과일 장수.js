function solution(k, m, score) {
    var answer = 0;
    score=score.sort((a,b)=>a-b); //올림차순 정렬
    while(score.length >=m) { // m보다 크거나 같을때 까지 반복
        let slice=score.splice(-m); //큰것부터 m개만큼 자른 후 
        let mini =Math.min(...slice); // 그것중에 최솟값을
        answer+=mini*m; // 최솟값* m을 해서  더해줌
    }
    return answer;
} // 내림차순 후 찾으면 시간초과 올림차순 후 뒤에서 부터 자르며 반복