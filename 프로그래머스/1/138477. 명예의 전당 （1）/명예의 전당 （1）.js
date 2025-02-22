function solution(k, score) {
    var answer = [];
    let result = [];
    for(let i =0;i<score.length;i++) {
        answer.push(score[i]); // 배열에 집어넣음
        answer.sort((a,b)=>b-a); // 넣을때 마다 내림차순 정렬
        if(answer.length>k) { // k개가 넘으면 젤 낮은 숫자 pop
            answer.pop();
        }
        result.push(answer[answer.length-1]); // 결과 배열에 제일 낮은 숫자를 넣어줌
    }
    
    return result;
}