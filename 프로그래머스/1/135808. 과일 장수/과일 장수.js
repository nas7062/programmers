function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=>b-a);
    for(let i =0; i<score.length;i+=m) {
        let arr = score.slice(i,i+m);
        if(arr.length ===m) {
            answer+=arr[arr.length-1] * m;
        }
    }
    return answer;
}