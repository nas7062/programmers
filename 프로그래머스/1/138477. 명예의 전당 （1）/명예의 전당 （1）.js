function solution(k, score) {
    var answer = [];
    let mung = [];
    for(let sc of score) {
        mung.push(sc);
        mung.sort((a,b)=>a-b);
        if(mung.length >k) {
            mung.splice(0,1);
        }
        answer.push(mung[0])
    }
    return answer;
}