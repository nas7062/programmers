function solution(participant, completion) {
    participant= participant.sort(); 
    completion = completion.sort();
    for(let i =0;i<participant.length;i++) { // 정렬된 배열 돌면서 다르면 반환
        if(participant[i]!==completion[i])
            return participant[i];
    }
}