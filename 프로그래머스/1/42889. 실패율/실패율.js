function solution(N, stages) {
    var answer = [];
    let len =stages.length;
    for(let i =1;i<=N;i++) {
        let cnt= 0;
        for(let j =0;j<=stages.length;j++) {
            if(i ===stages[j]) {
                cnt++;
            }
        }
        answer.push({stage:i,rate:cnt/len});
        len-=cnt;
    }
        answer.sort((a, b) => {
        if (b.rate === a.rate) return a.stage - b.stage;
        return b.rate - a.rate;
    });
    return answer.map((an)=>an.stage);
}